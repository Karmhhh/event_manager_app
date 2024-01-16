import {
  Box,
  Card,
  Stack,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";
export function EventPage() {
  const locationR = useLocation();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      maxHeight="90vh"
      margin={"0.5rem"}
    >
      <Card sx={{ width: 800, height: "90vh", textAlign: "center" }}>
        <CardMedia
          component="img"
          height="400"
          image={locationR.state.img}
          alt="event photo"
        />
        <CardContent>
          <PlaceIcon style={{ fontSize: 30, verticalAlign: "middle" }} />
          {locationR.state.luogo}
          <EventIcon
            style={{ fontSize: 30, verticalAlign: "middle", marginLeft: 100 }}
          />{" "}
          <i>
            {" "}
            <b>from</b>
          </i>
          {" " + locationR.state.startDate + " "}
          <i>
            <b>to</b>
          </i>
          {" " + locationR.state.endDate}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{ marginTop: 20 }}
          >
            {locationR.state.nome}
          </Typography>
          <hr style={{color:'lightgray', width:'70%'}}/>
          <Typography variant="body1" color="text.secondary" 
            style={{ marginTop: 20 }}>
            {locationR.state.descrizione}
          </Typography>
        </CardContent>

        {/*TICKET ZONE */}
        <CardContent
          style={{ textAlign: "right", margin: "1rem", padding: "2rem" }}
        >
         
          <hr style={{color:'lightgray'}}/>
          <Typography variant="h6" color="text.primary">
            <b>Price: </b>
            {locationR.state.prezzo}
          </Typography>
        </CardContent>
      </Card>

      {/* INIZIO LISTA LATERALE */}
      <Box
        style={{
          backgroundColor: `black`,
          marginLeft: 30,
          height: "90vh",
          width: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*DETTAGLI DELL'EVENTO */}

        <Grid container direction="column" xs={5} spacing={1}>
          <Grid item xs={5}>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <Typography
                style={{
                  color: "white",
                  width: 300,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                EVENT DETAILS
              </Typography>

              <li
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(232, 232, 232)",
                }}
              >
                <Typography
                  style={{
                    margin: "0px 0px 10px 0px",
                    color: "white",
                  }}
                >
                  Start:
                </Typography>
                <Typography style={{ color: "gray" }}>
                  {locationR.state.startDate}
                </Typography>
              </li>

              <li
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(232, 232, 232)",
                }}
              >
                <Typography
                  style={{
                    margin: "0px 0px 10px 0px",
                    color: "white",
                  }}
                >
                  End:
                </Typography>
                <Typography style={{ color: "gray" }}>
                  {locationR.state.endDate}
                </Typography>
              </li>

              <li
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(232, 232, 232)",
                }}
              >
                <Typography
                  style={{
                    margin: "0px 0px 10px 0px",
                    color: "white",
                  }}
                >
                  Category:
                </Typography>
                <Typography style={{ color: "gray" }}>
                  {locationR.state.categoria}
                </Typography>
              </li>
            </ul>
          </Grid>

          {/*DETTAGLI DEL PROMOTER */}

          <Stack>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <Typography
                style={{
                  color: "white",
                  width: 300,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                PROMOTER DETAILS
              </Typography>

              <li
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(232, 232, 232)",
                }}
              >
                <Typography
                  style={{
                    margin: "0px 0px 10px 0px",
                    color: "white",
                  }}
                >
                  Promoter:
                </Typography>
                <Typography style={{ color: "gray" }}>
                  {locationR.state.organizzatore}
                </Typography>
              </li>

              <li
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(232, 232, 232)",
                }}
              >
                <Typography
                  style={{
                    margin: "0px 0px 10px 0px",
                    color: "white",
                  }}
                >
                  Email:
                </Typography>
                <Typography style={{ color: "gray" }}>
                  {locationR.state.emailOrganizzatore}
                </Typography>
              </li>
            </ul>
          </Stack>
        </Grid>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Typography component={"div"} variant="body1" color="white">
            Add to favorites
          </Typography>
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
            color={isFavorited ? "white" : "default"}
          >
            {isFavorited ? (
              <FavoriteIcon style={{ fontSize: 30, color: "white" }} />
            ) : (
              <FavoriteBorderIcon style={{ fontSize: 30, color: "white" }} />
            )}
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Typography component={"div"} variant="body1" color="white">
            Buy Now
          </Typography>
          <IconButton
            aria-label="buy now"
            onClick={() => {}}
            color={"white"}
          >
            <PaymentsIcon style={{ fontSize: 30, color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}
