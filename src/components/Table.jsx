import DataTable from "react-data-table-component";
import { userresponses } from "../assets/data/UserResponses";
const data = userresponses;

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    wrap: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Question",
    selector: (row) => row.question,
  },
  {
    name: "Response",
    selector: (row) => row.response,
    wrap: true,
    conditionalCellStyles: [
      {
        when: (row) => row.response === null,
        style: {
          backgroundColor: "rgba(242, 38, 19, 0.9)",
          color: "white",
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
    ],
  },
];

const Table = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pointerOnHover
      highlightOnHover
      pagination
      selectableRows
    />
  );
};

export default Table;
