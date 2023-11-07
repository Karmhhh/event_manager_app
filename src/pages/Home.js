import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ClientImg from "../Assets/EllipseClient.png";
import ManagerImg from "../Assets/EllipseManager.png";
import ArtistImg from "../Assets/EllipseArtist.png";
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
            <img src={ClientImg} width={"75%"}></img>
          </Link>
          <Link to="/ManagerEvent">
            <img src={ManagerImg} width={"100%"}></img>
          </Link>
          <Link to="/Artist">
            <img src={ArtistImg} width={"75%"}></img>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
