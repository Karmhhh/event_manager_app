import { Outlet } from "react-router";
import "../App.css";
import { Stack, Typography } from "@mui/material";

export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction={"row"} spacing={3} alignItems={'center'}>
          <Typography variant="h4" component={"b"}>
            Art
          </Typography>
          <Typography variant="h6" component={"i"}>
            is for
          </Typography>
          <Typography variant="h4" component={"b"}>
            Everyone.
          </Typography>
        </Stack>
      </header>

      <Outlet />
    </div>
  );
};
