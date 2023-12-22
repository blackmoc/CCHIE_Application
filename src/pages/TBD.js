//This is a page for to be developed

import { Box, Container, Typography, Fab } from "@mui/material";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import { Link } from "react-router-dom";

export default function TBD() {
  return (
    <Container>
      <Box
        sx={{
          py: 6,
          maxWidth: 800,
          mx: "auto",
          display: "flex",
          minHeight: "100vh",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ m: 2 }}>
          Sorry, Page Not Found...
        </Typography>
        <Typography variant="h4">
          Sorry, we could not find the page that you were looking for. It may be
          being developed at this time.
        </Typography>
        <Fab
          variant="extended"
          sx={{
            my: 3,
            display: "flex",
            background: "#ffcccb",
          }}
          component={Link}
          to={"/"}
        >
          <CottageTwoToneIcon sx={{ mr: 1, color: "red" }} />
          <Typography sx={{ color: "red" }}>Return Home</Typography>
        </Fab>
      </Box>
    </Container>
  );
}
