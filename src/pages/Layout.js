import { Outlet } from "react-router";
import "../App.css";
import {  Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "./Components/AppBar"
export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
      
        <ResponsiveAppBar/>
      </header>

      <Outlet />
      <footer className="App-footer">
        Made with 🖤 by Partenope Students.
      </footer>
    </div>
  );
};
