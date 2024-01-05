import { Box, Stack, Link, Grid } from "@mui/material";
import { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
export function LoginClients() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <Box
      style={{
        border: "groove 3px black",
        borderRadius: "30px",
        width: "20rem",
        padding: "2rem",
        marginBottom: "10rem",
      }}
      className={"center"}
    >
      <div>
        <h2>Login as a Client</h2>
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"} spacing={3}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Button type="submit" variant="outlined">
              Login
            </Button>

            <Grid container direction={"row"} justifyContent={"space-between"}>
              <Grid item>
                {" "}
                <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
              </Grid>
              <Grid item>
                <Link href={"/signUpClients"}>{"Sign Up"}</Link>{" "}
              </Grid>
            </Grid>
          </Stack>
        </form>
      </div>
    </Box>
  );
}

export function LoginPromoters() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <Box
      style={{
        border: "groove 3px black",
        borderRadius: "30px",
        width: "20rem",
        padding: "2rem",
        marginBottom: "10rem",
      }}
      className={"center"}
    >
      <div>
        <h2>Login as a Promoter</h2>
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"} spacing={3}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "10px" }}
            />

            <FormControlLabel control={<Checkbox />} label="Remember me" />

            <Button type="submit" variant="outlined">
              Login
            </Button>
            <Grid container direction={"row"} justifyContent={"space-between"}>
              <Grid item>
                {" "}
                <Link href={"/forgotPassword"}>{"Forgot Password?"}</Link>
              </Grid>
              <Grid item>
                <Link href={"/signUpPromoters"}>{"Sign Up"}</Link>{" "}
              </Grid>
            </Grid>
          </Stack>
        </form>
      </div>
    </Box>
  );
}
