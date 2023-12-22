import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import { Link } from "react-router-dom";
import { Fab, Typography } from "@mui/material";

export default function ReturnHomeBtn() {
  return (
    <Fab
      variant="extended"
      sx={{
        position: "fixed",
        top: "50px",
        right: "100px",
        display: "flex",
        background: "#ffcccb",
      }}
      component={Link}
      to={"/"}
      // href="/"
    >
      <CottageTwoToneIcon sx={{ mr: 1, color: "red" }} />
      <Typography sx={{ color: "red" }}>Return Home</Typography>
    </Fab>
  );
}
