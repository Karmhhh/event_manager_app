import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../Assets/ArtGalleryimg1.jpg";
import img2 from "../Assets/ArtGalleryimg2.jpg";
import img3 from "../Assets/ArtGalleryimg3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  {
    title:
      " “L'arte non ha epoca. E' l'emozione che dorme su guanciali d'eternità.” ",
    url: img1,
  },
  { title: " “All'opera si conosce il maestro.” ", url: img2 },
  {
    title: " “L'arte è fatta per disturbare, la scienza per rassicurare.” ",
    url: img3,
  },
];

export const Home = () => {
  return (
    <Stack style={{ height: "80vh" }}>
      <Slide
        autoplay={true}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        {images.map((img) => (
          <div key={img.title} className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${img.url})`,
              }}
            >
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </Slide>
    </Stack>
  );
};
