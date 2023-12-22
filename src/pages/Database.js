import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { qaDataWithIds } from "data/Data";
import { columns } from "helpers/Database.helpers";
import ReturnHomeBtn from "components/button/ReturnHomeBtn";

function Database() {
  return (
    <Paper square variant="elevated" elevation={4}>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
          mt: 5,
        }}
      >
        CCHIE QA Database
      </Typography>
      <ReturnHomeBtn />
      <Card sx={{ mx: 10, mt: 1, mb: 3 }}>
        <CardContent>
          <Box style={{ height: 900 }}>
            <DataGrid
              editMode="row"
              rows={qaDataWithIds}
              columns={columns}
              sx={{ boxShadow: 1 }}
              getRowId={(row) => row.id}
            />
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Database;
