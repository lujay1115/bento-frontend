import gql from 'graphql-tag';

// -------------- Case ID area configurations --------------
const header = {
  label: 'Arm',
  dataField: 'study_acronym',
};

// --------------- Data panel configuration --------------
const armProperties = [
  // Each object here represents a set of label:value pair of a property
  {
    label: 'Arm',
    dataField: 'study_acronym',
    // valueLink property specify URL value should link to
    // space holder "{}" will be replaced by actual value in the dataField
    // linkUrl: '/program/{}',
    // labelLinkUrl property specify URL label should link to
    // labelLinkUrl: '/programs',
  },
  {
    label: 'Arm Name',
    dataField: 'study_name',
    // linkUrl: '/study/{}',
  },
  {
    label: 'Arm Type',
    dataField: 'study_type',
  },
  {
    label: 'Arm Description',
    dataField: 'study_full_description',
  },
];

// --------------- File table configuration --------------

const tableConfig = {
  // Set 'display' to false to hide the table entirely
  display: false,
  // Table title
  title: 'ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  filesField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Columns
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'association',
      header: 'Association',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'armDetail';
// Primary ID field used to query a case
const armIDField = 'study_acronym';
// GraphQL query to retrieve detailed info for a case
const GET_ARM_DETAIL_DATA_QUERY = gql`
  query armDetail($study_acronym: String) {
    armDetail(study_acronym: $study_acronym) {
      study_acronym
      study_name
      study_type
      study_full_description
      study_info
      num_subjects
      num_files
      diagnoses {
        group
        subjects
      }
      files {
        file_name
        file_type
        file_description
        file_format
        file_size
        file_id
        md5sum
      }
    }
  }
`;

export {
  header,
  dataRoot,
  armIDField,
  armProperties,
  tableConfig,
  GET_ARM_DETAIL_DATA_QUERY,
};
