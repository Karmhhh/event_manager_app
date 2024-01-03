import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCart from "@mui/icons-material/AddShoppingCart";
export default function EventCard(props) {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        style={{
          background: "lightgray",
          borderRadius: "20px",
          padding: "2rem",
          height: "10vh",
        }}
        justifyContent={"space-between"}
      >
        <div
          style={{
            background: "black",
            borderRadius: "20px 0px 20px 20px",
            padding: "2rem",
            height: "10vh",
          }}
        >
          <Typography variant="h5" style={{ color: "white" }}>
            Data: {props.dataEvent}
          </Typography>
          <Typography variant="h6" style={{ color: "white" }}>
            Ora: {props.orario}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">{props.titolo}</Typography>
          <Typography variant="body1">{props.description}</Typography>
        </div>
        <div
          style={{
            background: "#9447FF",
            borderRadius: "20px 20px 20px 0px",
            padding: "2rem",
            height: "10vh",
          }}
        >
          <Typography variant="h5">Prezzo: {props.prezzo}</Typography>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item container direction="column" alignItems="center" md={5}>
              <FavoriteIcon style={{ color: "black" }} />
              <Typography variant="caption" style={{ color: "black" }}>
                Add to <br></br>favorites
              </Typography>
            </Grid>
            <Grid item container direction="column" alignItems="center" md={5}>
              <ShoppingCart style={{ color: "gray" }} />
              <Typography variant="caption" style={{ color: "black" }}>
                Add to <br></br>Cart
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </>
  );
}
