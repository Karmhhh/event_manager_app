import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClientImg from "../Assets/EllipseClient.png";
import ManagerImg from "../Assets/EllipseManager.png";
import ArtistImg from "../Assets/EllipseArtist.png";
import ClientImgo from "../Assets/Ellipseclient.png";
import ManagerImgo from "../Assets/Ellipsemanager.png";
import ArtistImgo from "../Assets/Ellipseartist.png";

import { ImageOnOver } from "./Components/ImageOnOver";
export const Home = () => {
  return (
    <>
      <Stack margin={3} spacing={5} justifyContent={"center"}>
        <div>
          <Typography variant="h5" component={"b"}>
            Hi,
          </Typography>
          <Typography variant="h6">Who are you?</Typography>
        </div>

        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"baseline"}
        >
          <Link to="/Client">
          <ImageOnOver onTrue={ClientImgo} onFalse={ClientImg}  widthProp={'75%'} ></ImageOnOver>
          </Link>
          <Link to="/ManagerEvent">
          
          <ImageOnOver onTrue={ManagerImgo} onFalse={ManagerImg}  widthProp={'100%'} ></ImageOnOver>
           </Link>
          <Link to="/Artist">
          
          <ImageOnOver onTrue={ArtistImgo} onFalse={ArtistImg} widthProp={'75%'} ></ImageOnOver>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
