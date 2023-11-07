import { Outlet } from "react-router";
import "../App.css";
import { Stack, Typography } from "@mui/material";

export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction={"row"} spacing={5}>
          <Typography variant="h3" component={"b"}>
            Art
          </Typography>
          <Typography variant="h4" component={"i"}>
            is for
          </Typography>
          <Typography variant="h3" component={"b"}>
            Everyone.
          </Typography>
        </Stack>
      </header>

      <Outlet />
    </div>
  );
};
