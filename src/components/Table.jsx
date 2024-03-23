/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import { userresponses } from "../assets/data/UserResponses";
import { useState } from "react";
import Link from "@mui/material/Link";

function ExpandableCell({ value }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {expanded ? value : value.slice(0, 200)}
      {value.length > 200 && (
        <Link
          type="button"
          component="button"
          sx={{ fontSize: "inherit" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "view less" : "view more"}
        </Link>
      )}
    </div>
  );
}
function RetrieveResponse(params) {
  const [useResponse, setResponse] = useState(false);

  const handleButtonClick = () => {
    setResponse(true);
  };

  return (
    <div>
      <div>
        {useResponse ? (
          params.value
        ) : (
          <button onClick={handleButtonClick}>Retrieve Response</button>
        )}
      </div>
    </div>
  );
}
const cols = [
  { field: "name", headerName: "Full Name", width: 150, align: "center" },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "question",
    headerName: "Question",
    width: 400,
    // renderCell: (params) => <ExpandableCell {...params} />,
  },
  {
    field: "response",
    headerName: "Response",
    width: 350,
    // renderCell: (params) => <RetrieveResponse {...params} />,
    renderCell: (params) => <ExpandableCell {...params} />,
  },
];

const Table = () => {
  return (
    <DataGrid
      rows={userresponses}
      columns={cols}
      initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
      pageSizeOptions={[5, 10]}
      getRowHeight={() => "auto"}
      sx={{
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-cell": {
          padding: "5px 0",
          display: "flex",
          alignItems: "center",
        },
      }}
    />
  );
};
export default Table;
