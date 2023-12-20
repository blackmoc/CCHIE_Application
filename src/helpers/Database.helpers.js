const category = [
  {
    value: "General Inquiries about CCIHE",
    label: "General Inquiries about CCIHE",
  },
  {
    value: "Data Related Questions",
    label: "Data Related Questions",
  },
  {
    value: "Methodology-related Questions",
    label: "Methodology-related Questions",
  },
  {
    value: "Doctoral Universities",
    label: "Doctoral Universities",
  },
  {
    value: "Research Index",
    label: "Research Index",
  },
  {
    value: "Degree Conferal",
    label: "Degree Conferal",
  },
  {
    value: "Degree Mapping",
    label: "Degree Mapping",
  },
  {
    value: "Dormitory",
    label: "Dormitory",
  },
  {
    value: "Reclassification and Exceptions",
    label: "Reclassification and Exceptions",
  },
  {
    value: "CCHIE Statisitics",
    label: "CCHIE Statisitics",
  },
  {
    value: "Appropriate Use of CCHIE Materials",
    label: "Appropriate Use of CCHIE Materials",
  },
  {
    value: "Institution Specific Questions",
    label: "Institution Specific Questions",
  },
  {
    value: "Website Questions",
    label: "Website Questions",
  },
  {
    value: "Other Questions",
    label: "Other Questions",
  },
];
const columns = [
  {
    field: "Questions",
    headerName: "Question",
    flex: 1,
    editable: true,
  },
  {
    field: "Answers",
    headerName: "Answer",
    flex: 1,
    editable: true,
  },
  {
    field: "Category",
    headerName: "Category",
    type: "singleSelect",
    valueOptions: category.map((item) => item.value),
    flex: 1,
    editable: true,
  },
  {
    field: "Comments",
    headerName: "Comments",
    flex: 1,
    editable: true,
  },
  {
    field: "Source",
    headerName: "Source",
    type: "singleSelect",
    valueOptions: ["website", "best", "email"],
    editable: true,
    flex: 1,
  },
];

export { category, columns };
