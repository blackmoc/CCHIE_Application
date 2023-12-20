import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function HomeBtn() {
  return (
    <Button component={Link} to={"/"}>
      Return Home
    </Button>
  );
}
