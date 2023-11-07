import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ClientImg from "../Assets/EllipseClient.png";
import ManagerImg from "../Assets/EllipseManager.png";
import ArtistImg from "../Assets/EllipseArtist.png";
export const Home = () => {
  return (
    <>
      <Stack margin={3} spacing={3} justifyContent={"center"}>
        <Typography variant="h3" component={"b"}>
          Hi,
        </Typography>
        <Typography variant="h4">Who are you?</Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"baseline"}
        >
          <Link to="/Client" ><img src={ClientImg} width={'410rem'}></img></Link>
          <Link to="/ManagerEvent"><img src={ManagerImg} width={'500rem'}></img></Link> 
          <Link to="/Artist"><img src={ArtistImg} width={'410rem'}></img></Link>
        </Stack>
      </Stack>
    </>
  );
};
