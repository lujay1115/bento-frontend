import gql from 'graphql-tag';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed
export const facetSearchData = [
  {
    label: 'Institution', field: 'group', api: 'subjectCountByProgram', apiForFiltering: 'filterSubjectCountByProgram', datafield: 'programs', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Gender', field: 'group', api: 'subjectCountByMenopauseStatus', apiForFiltering: 'filterSubjectCountByMenopauseStatus', datafield: 'meno_status', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Diagnosis', field: 'group', api: 'subjectCountByDiagnoses', apiForFiltering: 'filterSubjectCountByDiagnoses', datafield: 'diagnoses', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Survival Event', field: 'group', api: 'subjectCountByRecurrenceScore', apiForFiltering: 'filterSubjectCountByRecurrenceScore', datafield: 'rc_scores', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Neuor Exam Score', field: 'group', api: 'subjectCountByTumorSize', apiForFiltering: 'filterSubjectCountByTumorSize', datafield: 'tumor_sizes', section: 'Filter By Cases', show: true,
  },
  {
    label: 'On Therapy Radiation Type', field: 'group', api: 'subjectCountByChemotherapyRegimen', apiForFiltering: 'filterSubjectCountByChemotherapyRegimen', datafield: 'chemo_regimen', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Tumor Grade', field: 'group', api: 'subjectCountByTumorGrade', apiForFiltering: 'filterSubjectCountByTumorGrade', datafield: 'tumor_grades', section: 'Filter By Cases', show: true,
  },
  {
    label: 'ER Status', field: 'group', api: 'subjectCountByErStatus', apiForFiltering: 'filterSubjectCountByErStatus', datafield: 'er_status', section: 'Filter By Cases', show: false,
  },
  {
    label: 'PR Status', field: 'group', api: 'subjectCountByPrStatus', apiForFiltering: 'filterSubjectCountByPrStatus', datafield: 'pr_status', section: 'Filter By Cases', show: false,
  },
  {
    label: 'On Therapy Radiation Type', field: 'group', api: 'subjectCountByChemotherapyRegimen', apiForFiltering: 'filterSubjectCountByEndocrineTherapy', datafield: 'endo_therapies', section: 'Filter By Cases', show: false,
  },
  {
    label: 'Gender', field: 'group', api: 'subjectCountByMenopauseStatus', apiForFiltering: 'filterSubjectCountByMenopauseStatus', datafield: 'meno_status', section: 'Filter By Cases', show: false,
  },
  {
    label: 'Tissue Type', field: 'group', api: 'subjectCountByTissueType', apiForFiltering: 'filterSubjectCountByTissueType', datafield: 'tissue_type', section: 'Filter By Samples', show: false,
  },
  {
    label: 'Tissue Composition', field: 'group', api: 'subjectCountByTissueComposition', apiForFiltering: 'filterSubjectCountByTissueComposition', datafield: 'composition', section: 'Filter By Samples', show: false,
  },
  {
    label: 'File Association', field: 'group', api: 'subjectCountByFileAssociation', apiForFiltering: 'filterSubjectCountByFileAssociation', datafield: 'association', section: 'Filter By Files', show: true,
  },
  {
    label: 'File Type', field: 'group', api: 'subjectCountByFileType', apiForFiltering: 'filterSubjectCountByFileType', datafield: 'file_type', section: 'Filter By Files', show: true,
  },
];

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  'Filter By Cases': {
    color: '#10A075',
    checkBoxColorsOne: '#E8F7DC',
    checkBoxColorsTwo: '#F5FDEE',
    height: '5px',
    isExpanded: false,
  },
  'Filter By Samples': {
    color: '#10BEFF',
    checkBoxColorsOne: '#C9EBF7',
    checkBoxColorsTwo: '#E8F8FE',
    height: '5px',
    isExpanded: false,
  },
  'Filter By Files': {
    color: '#E636E4',
    checkBoxColorsOne: '#FBE3FB',
    checkBoxColorsTwo: '#FFF2FF',
    height: '5px',
    isExpanded: false,
  },
};

// --------------- Default Dashboard Sidebar Sections styling --------------
export const defaultFacetSectionVariables = {
  color: '#000000',
  checkBoxColorsOne: '#E8F7DC',
  checkBoxColorsTwo: '#F5FDEE',
  height: '5px',
  isExpanded: false,
};

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'donut',
    label: 'Institution',
    dataName: 'subjectCountByProgram',
    datatable_field: 'program',
    show: true,
  },
  {
    type: 'donut',
    label: 'Diagnosis',
    dataName: 'subjectCountByDiagnoses',
    datatable_field: 'diagnosis',
    show: true,
  },
  {
    type: 'donut',
    label: 'Tumor Grade',
    dataName: 'subjectCountByTumorGrade',
    datatable_field: 'tumor_grade',
    show: true,
  },
  {
    type: 'donut',
    label: 'Survival Event',
    dataName: 'subjectCountByRecurrenceScore',
    datatable_field: 'recurrence_score',
    show: true,
  },
  {
    type: 'donut',
    label: 'On therapy radiation type',
    dataName: 'subjectCountByChemotherapyRegimen',
    datatable_field: 'chemotherapy',
    show: true,
  },
  {
    type: 'donut',
    label: 'On therapy surgery title',
    dataName: 'subjectCountByEndocrineTherapy',
    datatable_field: 'endocrine_therapy',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Cases',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
    {
      dataField: 'subject_id',
      header: 'Subject ID',
      sort: 'asc',
      primary: true,
      display: true,
    },
    {
      dataField: 'program',
      header: 'Institution',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'diagnosis',
      header: 'Diagnosis',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_grade',
      header: 'Tumor Grade',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'age_at_index',
      header: 'Age Range',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'menopause_status',
      header: 'Gender',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_size',
      header: 'Neuor Exam Score',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'endocrine_therapy',
      header: 'On Therapy Radiation Type',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'chemotherapy',
      header: 'On Therapy Surgery Title',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'recurrence_score',
      header: 'Survival Event',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'survival_time',
      header: 'Survival Time(month)',
      sort: 'asc',
      display: true,
    },
  ],
};

// --------------- Sorting related labels configuration --------------
export const sortLabels = {
  sortAlphabetically: 'Sort alphabetically',
  sortByCount: 'Sort by counts',
  showMore: '...expand to see all selections',
};

export const showCheckboxCount = 5;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  subjectCountByProgram{
        group
        subjects
      }
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
        group
        subjects
      }
    subjectCountByTumorGrade{
        group
        subjects
      }
  subjectCountByErStatus{
        group
        subjects
      }
  subjectCountByPrStatus{
        group
        subjects
      }
  subjectCountByMenopauseStatus{
        group
        subjects
      }
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
  subjectCountByFileType{
    group
    subjects
}
subjectCountByFileAssociation {
    group
    subjects
}
subjectCountByTissueComposition{
    group
    subjects
}
subjectCountByTissueType{
    group
    subjects
}
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }
    subjectOverViewPaged(first: 100) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{
  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;
