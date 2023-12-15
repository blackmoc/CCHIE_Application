import { Grid, Typography } from "@mui/material";

const BotResponse = (props) => {
  const { message } = props;

  return (
    <Grid container spacing={1} justifyContent={"flex-start"}>
      <Grid item xs={11}>
        <Typography
          sx={{
            color: "white",
            borderRadius: 2,
            marginBottom: 2,
            display: "inline-block",
            border: "3px solid",
            borderColor: "navy",
            p: 2,
            bgcolor: "gray",
          }}
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BotResponse;
