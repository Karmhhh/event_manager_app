import { Box, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [describe, setDescribe] = useState("");
  const [confermaEmail, setConfermaEmail] = useState("");
  const [buttonText, setButtonText] = useState("Send Ticket!");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Surname", surname);
    console.log("Email", email);
    console.log("Conferma Email", confermaEmail);
    console.log("Describe your Problem", describe);
  };
  const handleSendTicket = () => {
    alert("Sended! Check your email!");
    setButtonDisabled(true);
  };
  function handleClick() {
    setButtonText("Sended!");
  }

  return (
    <Box
      style={{
        border: "groove 3px black",
        borderRadius: "30px",
        width: "30rem",
        padding: "2rem",
      }}
      className={"center"}
    >
      <div>
        <h2>{"Need help? ...Contact Us!"}</h2>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction={"column"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Surname"
                onChange={(e) => setSurname(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-required"
                label="Confirm Your Email"
                onChange={(e) => setConfermaEmail(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="10">
              <TextField
                required
                id="outlined-multiline-static"
                label="Describe your problem"
                multiline
                rows={5}
                style={{ width: "90%" }}
                onChange={(e) => setDescribe(e.target.value)}
              />
            </Grid>
            <Grid item md="10">
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  handleSendTicket();
                  handleClick();
                }}
                disabled={buttonDisabled}
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Box>
  );
};
