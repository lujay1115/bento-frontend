import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import env from '../../utils/env';
import CustomIcon from '../CustomIcon/CustomIconView';

const FILE_SERVICE_API = env.REACT_APP_FILE_SERVICE_API;

const fetchFileToDownload = (fileURL = '') => {
  fetch(`${FILE_SERVICE_API}${fileURL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileURL;
      document.body.appendChild(a);
      a.click();
      a.remove(); // afterwards we remove the element again
    });
};

const DocumentDownload = ({
  fileSize = 0,
  maxFileSize = 500000,
  toolTipTextFileDownload = 'Download a copy of this file',
  toolTipTextFilePreview = 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
  iconFileDownload = '',
  iconFilePreview = '',
  fileLocation = '',
}) => (
  <>
    { fileSize < maxFileSize ? (
      <Tooltip title={toolTipTextFileDownload}>
        <div onClick={() => fetchFileToDownload(fileLocation)}>

          <CustomIcon imgSrc={iconFileDownload} />
        </div>
      </Tooltip>
    ) : (
      <Tooltip title={toolTipTextFilePreview}>
        <span>
          <CustomIcon imgSrc={iconFilePreview} />
        </span>
      </Tooltip>
    )}
  </>
);
export default DocumentDownload;
