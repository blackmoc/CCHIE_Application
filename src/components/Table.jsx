import { DataGrid } from "@mui/x-data-grid";
import { userresponses } from "../assets/data/UserResponses";
import { useState } from "react";

const cols = [
  { field: "name", headerName: "Full Name", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "question", headerName: "Question", width: 350 },
  {
    field: "response",
    headerName: "Response",
    width: 350,
    renderCell: (params) => {
      const [useResponse, setResponse] = useState(false);

      const handleButtonClick = () => {
        setResponse(true);
      };

      return (
        <div>
          <div
            style={{
              marginTop: "12px",
            }}
          >
            {useResponse ? (
              params.value
            ) : (
              <button onClick={handleButtonClick}>Retrieve Response</button>
            )}
          </div>
        </div>
      );
    },
  },
];

const Table = () => {
  return (
    <DataGrid
      rows={userresponses}
      columns={cols}
      initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
      pageSizeOptions={[5, 10]}
    />
  );
};
export default Table;
