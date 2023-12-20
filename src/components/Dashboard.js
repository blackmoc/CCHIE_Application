import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  generateGPTResponse,
  generateFineTuneResponse,
} from "helpers/Chat.helpers";
import { category, columns } from "helpers/Database.helpers";
import { qaDataWithIds } from "data/Data";

function Dashboard() {
  const [gptUserQuestion, setGPTUserQuestion] = useState("");
  const [gptResponse, setGPTResponse] = useState("");

  const handleGPTSubmit = async (event) => {
    event.preventDefault();
    console.log(gptUserQuestion);
    try {
      const botResponse = await generateGPTResponse(gptUserQuestion);
      console.log(botResponse);
      setGPTResponse(botResponse);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };
  const [gptftUserQuestion, setGPTFTUserQuestion] = useState("");
  const [gptFineTuneResponse, setGPTFineTuneResponse] = useState("");

  const handleFTGPTSubmit = async (event) => {
    event.preventDefault();
    console.log(gptftUserQuestion);
    try {
      const botResponse = await generateFineTuneResponse(gptftUserQuestion);
      console.log(botResponse);
      setGPTFineTuneResponse(botResponse);
    } catch (error) {
      console.error("Error fetching Fine Tuned GPT response:", error);
    }
  };
  const [llamaUserQuestion, setLLamaUserQuestion] = useState("");
  const [llamaResponse, setLlamaResponse] = useState("");

  const handleLlamaSubmit = async (event) => {};

  return (
    <Grid container spacing={3} pt={8} pr={4} pl={4}>
      {/* GPT 3.5 Question/Answer Card */}
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              GPT 3.5 Model
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 1, mb: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="outlined-required"
                  label="Question"
                  multiline
                  maxRows={4}
                  value={gptUserQuestion}
                  onChange={(event) => {
                    setGPTUserQuestion(event.target.value);
                  }}
                />
              </div>
              <Button onClick={handleGPTSubmit}>Ask Question</Button>
              <Button>Clear</Button>
              <Typography>
                {gptResponse && <p>Answer: {gptResponse}</p>}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* Fine Tuned GPT Question/Answer Card */}
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              Fine Tuned GPT 3.5 Model
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 1, mb: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="outlined-required"
                  label="Question"
                  multiline
                  maxRows={4}
                  value={gptftUserQuestion}
                  onChange={(event) => {
                    setGPTFTUserQuestion(event.target.value);
                  }}
                />
              </div>
              <Button onClick={handleFTGPTSubmit}>Ask Question</Button>
              <Button>Clear</Button>
              <Typography>
                {gptFineTuneResponse && <p>Answer: {gptFineTuneResponse}</p>}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* LLama II Question/Answer Card */}
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              Llama II Model
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 1, mb: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="outlined-required"
                  label="Question"
                  multiline
                  maxRows={4}
                  value={llamaUserQuestion}
                  onChange={(event) => {
                    setLLamaUserQuestion(event.target.value);
                  }}
                />
              </div>
              <Button onClick={handleLlamaSubmit}>Ask Question</Button>
              <Button>Clear</Button>
              <Typography>
                {llamaResponse && <p>Answer: {llamaResponse}</p>}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* Database Entry Form */}
      <Grid item xs={4}>
        <Card maxheight={400}>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              Additional Questions/Answers
            </Typography>
            <Box
              sx={{
                m: 1.5,
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <TextField
                sx={{ width: "95%" }}
                required
                multiline
                margin="normal"
                label="Question"
                maxRows={4}
              />
              <TextField
                sx={{ width: "95%" }}
                required
                multiline
                fullWidth
                margin="normal"
                label="Answer"
                maxRows={4}
              />
              <TextField
                sx={{ width: "95%" }}
                id="outlined-select-currency"
                select
                label="Category"
                required
                fullWidth
                margin="normal"
              >
                {category.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button sx={{ p: 1 }}>Submit</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* Display Database */}
      <Grid item xs={8}>
        <Card maxheight={400}>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}
            >
              Current Database
            </Typography>
            <Box style={{ height: 400, width: "100%" }} sx={{ m: 1 }}>
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
      </Grid>
    </Grid>
  );
}

export default Dashboard;
