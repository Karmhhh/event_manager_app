import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../Assets/ArtGalleryimg1.jpg";
import img2 from "../Assets/ArtGalleryimg2.jpg";
import img3 from "../Assets/ArtGalleryimg3.jpg";
import img4 from "../Assets/Ellipseartist.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
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
  const [userType, setUserType] = useState('none')
  return (
    <Stack spacing={3} style={{ height: "80vh" }}>
      <Slide
        autoplay={true}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        {images.map((img) => (
          <div key={img.title} className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${img.url})`, backgroundSize: 'cover'
              }}
            >
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </Slide>
      {/* web */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Grid container spacing={2} direction={"row"} className="row-img">
      <Grid item lg={4}>
           <img src={img1} alt="img" />
         </Grid>
         <Grid item container direction={'column'} lg={3} >
           
           <Grid item  md={4}> 
             <span>
               <Typography component={'i'} variant="h3" style={{display:'block'}}>For Clients  </Typography>
               <Typography component={'i'} variant="body1">If you're looking to turn your day into a cultural adventure, you're in the right place! Explore our world of extraordinary exhibitions and snag yourself a ticket to fun. Get ready to dive into a journey of art, emotions, and discoveries. Don't miss the chance to purchase your ticket for an experience that will bring a smile to your face. Click now and start the countdown to cultural delight!"</Typography>
             </span>
           </Grid>

             <Grid item container direction={"row"}>
               <Grid item md={6}>
               <Link
                  key={'login'}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/loginclients`}
                >
                   <KeyboardDoubleArrowLeftIcon /> <Typography textAlign="center"> {'Login'}</Typography>
                
                </Link>
                   </Grid> 
                 <Grid item  md={6}>
                 <Link
                  key={'SignUp'}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/signUpclients`}
                >
                   <KeyboardDoubleArrowRightIcon /> <Typography textAlign="center"> {'Sign Up'}</Typography>
                
                </Link>
                  </Grid>  
             </Grid>
         </Grid>
       
       </Grid>
        <Grid container spacing={2} direction={"row"} className="row-img">
         
          <Grid item container direction={'column'} lg={3} >
            
            <Grid item  md={4}> 
              <span>
                <Typography component={'i'} variant="h3" style={{display:'block'}}>For Promoters </Typography>
                <Typography component={'i'} variant="body1">Welcome to the place where your event takes center stage! If you have a special occasion to share with the world, you're in the right spot. Enter the details of your event and let the magic of advertising bring it into the spotlight. The stage is yours, and we're here to make you shine. Don't wait, click now, and give your event the attention it deserves. Make every moment unforgettable!</Typography>
              </span>
            </Grid>

              <Grid item container direction={"row"}>
                <Grid item md={6}>
                <Link
                  key={'loginprom'}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/loginpromoters`}
                >
                   <KeyboardDoubleArrowLeftIcon /> <Typography textAlign="center"> {'Login'}</Typography>
                
                </Link>   </Grid> 
                  <Grid item  md={6}>
                  <Link
                  key={'signUpprom'}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/signUppromoters`}
                >
                   <KeyboardDoubleArrowRightIcon /> <Typography textAlign="center"> {'Sign Up'}</Typography>
                
                </Link> </Grid>  
              </Grid>
          </Grid>
          <Grid item lg={4}>
            <img src={img2} alt="img" />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction={"row"} className="row-img">
          <Grid item lg={4}>
            <img src={img3} alt="img" />
          </Grid>
          <Grid item lg={7}>
            <span> For Artists...
                Other features are coming soon.</span>
          </Grid>{" "}
        </Grid>
      </Box>

      {/* mobile */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid item xs={7} style={{ background: `url(${img1})` , height:'10rem', backgroundSize: 'cover'}}>
           
          </Grid>
          <Grid item xs={4}>
          <span>
              <Typography component={"i"} variant={"h6"}>
                For Clients
              </Typography>
            </span>
          </Grid>{" "}
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
       
          <Grid item xs={4}>   <span>
              <Typography component={"i"} variant={"h6"}>
                For Promoters
              </Typography>
            </span></Grid>
          <Grid item xs={7} style={{ background: `url(${img2})` , height:'10rem', backgroundSize: 'cover'}}>
         
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          className="row-img-mobile"
        >
          <Grid item xs={7} style={{ background: `url(${img3})` ,height:'10rem', backgroundSize: 'cover'}}>
         
          </Grid>
          <Grid item xs={4}>   <span>
              <Typography component={"i"} variant={"h6"}>
                For Artists...
                Other features are coming soon.
              </Typography>
            </span></Grid>{" "}
        </Grid>
      </Box>
      <footer >
      <hr style={{width:'80%',margin: '10px auto'}}/>
        <Stack direction={'row'}> 
          <Typography component={'div'} variant="h5">hsdòcòvneqjhv</Typography>  
          <Divider orientation="vertival"/>
          <Typography component={'div'} variant="subtitle">hsdòcòvneqjhv</Typography>  
       
        </Stack>
      </footer>
    </Stack>
  );
};
