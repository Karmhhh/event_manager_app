import * as React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import ArtGalleryImg2 from "../../../Assets/ArtGalleryimg2.jpg";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const themes = [
  "Music",
  "Photography",
  "Design",
  "Horror",
  "Visual Art",
  "Sculpture",
  "Digital Art",
];

function getStyles(name, ourThemes, themeEvent) {
  return {
    fontWeight:
      ourThemes.indexOf(name) === -1
        ? themeEvent.typography.fontWeightRegular
        : themeEvent.typography.fontWeightMedium,
  };
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Request = () => {
  const [ourThemes, setOurThemes] = React.useState([]);
  const [location, setLocation] = useState("");
  const [describe, setDescribe] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationDescribe, setLocationDescribe] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const themeEvent = useTheme();
  const [eventName, setEventName] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOurThemes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location Address", location);
    console.log("Location Name", locationName);
    console.log("Describe your Event", describe);
    console.log("Describe Location", locationDescribe);
    console.log("Max Customers", maxCustomers);
    console.log("Theme", themeEvent);
    console.log("Event Name", eventName);
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
        <h1>{"Event Request"}</h1>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction={"row"}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                required
                id="outlined-required"
                label="Event Name"
                onChange={(e) => setEventName(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                required
                id="outlined-required"
                label="Location Name"
                onChange={(e) => setLocationName(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                required
                id="outlined-required"
                label="Location Address"
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                required
                id="outlined-required"
                label="Max Customer"
                onChange={(e) => setMaxCustomers(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-required"
                label="Describe Location"
                onChange={(e) => setLocationDescribe(e.target.value)}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item md="5">
              <FormControl sx={{ width: "90%" }}>
                <InputLabel id="demo-multiple-name-label">Theme</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={ourThemes}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {themes.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, ourThemes, themeEvent)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md="5">
              <Typography fontStyle={"italic"}>Permission Document</Typography>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
              {/*              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  handleSendTicket();
                  handleClick();
                }}
                disabled={buttonDisabled}
              >
                {buttonText}
              </Button>*/}
            </Grid>
            <Grid item md="5">
              <Typography fontStyle={"italic"}>Id Card</Typography>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
          </Grid>
          <Grid item md="5" margin={2}>
            <Typography variant="h6">Why should we pick you?</Typography>
            <TextField
              required
              multiline
              rows={3}
              id="outlined-multiline-static"
              label="Describe your Event"
              style={{ width: "90%" }}
              onChange={(e) => setDescribe(e.target.value)}
            />
          </Grid>
          <Grid item md="5">
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
        </form>
      </div>
    </Box>
  );
};
