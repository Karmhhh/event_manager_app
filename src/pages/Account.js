import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PaletteIcon from '@mui/icons-material/Palette';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { Grid, TextField, Stack, CardActions, Button } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import { EventCard } from "./Components/EventCard";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import event3 from "../Assets/event3.jpg";
import CardLarge from "./Components/CardLarge"
import { Request } from "./Modules/Forms/Request";
import { useTheme } from "@mui/material/styles";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CardOpere from "./Components/CardOpere";
const drawerWidth = 240;

const opere = [
  {
    nome: "venere",
    organizzatore: "Marck jset",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Bacio",
    organizzatore: "Marck jset",

    descrizione: "lorem impsWEEEjdhuceh",
    img: event2,
  },
  {
    nome: "Infinito",
    organizzatore: "Marck jset",

    descrizione: "lorem impsWEEEjdhuceh",
    img: event3,
  },]
const events = [
  {
    nome: "Comicon",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 12$",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Romix",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 17$",
    descrizione: "loDXSCErem impsjdhuceh",
    img: event2,
  },
  {
    nome: "Lucca",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 10$",
    descrizione: "lorem impsjdWFEEWEFhuceh",
    img: event3,
  },
  {
    nome: "comicon",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 12$",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Romix",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 17$",
    descrizione: "loDXSCErem impsjdhuceh",
    img: event2,
  },
  {
    nome: "Lucca",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 10$",
    descrizione: "lorem impsjdWFEEWEFhuceh",
    img: event3,
  },
  {
    nome: "Comicon",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 12$",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Romix",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 17$",
    descrizione: "loDXSCErem impsjdhuceh",
    img: event2,
  },
  {
    nome: "Lucca",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 10$",
    descrizione: "lorem impsjdWFEEWEFhuceh",
    img: event3,
  },
  {
    nome: "Comicon",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 12$",
    descrizione: "lorem impsWEEEjdhuceh",
    img: event1,
  },
  {
    nome: "Romix",
    organizzatore: "Marck jset",
    data: "Sat, 03 May 22",
    prezzo: " 17$",
    descrizione: "loDXSCErem impsjdhuceh",
    img: event2,
  },
];

export function AccountClient() {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
        return renderhistoryEventsSection();
  
      default:
        return null;
    }
  };
  const renderTicketSection = () => {
    return (
        <Box
          style={{
            margin: "2rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "85vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll" 
          }}
        >
          <Typography variant="h5">Your Tickets</Typography>
          <hr />
          <div >
            <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
            
          >
            {events.map((event) => (
             <Grid item md={5}> <CardLarge
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                prezzo={event.prezzo}
                descrizione={event.descrizione}
                img={event.img}
              /></Grid>
            ))}
          </Grid></div>
         
        </Box>
    );
  };

 

  const renderFavoritesSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
         overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Favorites</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
 
  const renderhistoryEventsSection= () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
        overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">History of Events</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Nation"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography variant="h5" >
          My Account 
        </Typography>
        <Typography variant="caption" style={{marginTop:'0px'}}> For Clients </Typography>
        <Divider />
        <List>
          {[
            {
              text: "Profile",
              icon: <AccountBoxIcon style={{ color: "white" }} />,
            },
            {
              text: "Tickets",
              icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
            },
            {
              text: "Favorites",
              icon: <FavoriteIcon style={{ color: "white" }} />,
            },
            {
              text: "History of Events",
              icon: <HistoryIcon style={{ color: "white" }} />,
            },          
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      {renderSection()}
    </Box>
  );
}




export function AccountPromoters() {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
        return renderhistoryEventsSection(); 
      case "Proposed Events":
        return renderProposedEventsSection();
      case "Incoming Reequests":
        return renderIncomingReqSection();
      case "Send a Request":
        return <Request></Request>;
      default:
        return null;
    }
  };

  const renderTicketSection = () => {
    return (
        <Box
          style={{
            margin: "2rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "85vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll" 
          }}
        >
          <Typography variant="h5">Your Tickets</Typography>
          <hr />
          <div >
            <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
            
          >
            {events.map((event) => (
             <Grid item md={5}> <CardLarge
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                prezzo={event.prezzo}
                descrizione={event.descrizione}
                img={event.img}
              /></Grid>
            ))}
          </Grid></div>
         
        </Box>
    );
  };

  const renderProposedEventsSection = () => {
    return (
      <div style={{ height: "auto", overflowY: "auto" }}>
        <Box
          style={{
            margin: "5rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5">Your Events</Typography>
          <hr />
          <Stack
            direction={"row"}
            spacing={6}
            justifyContent={"space-between"}
            style={{ overflowY: "scroll", margin: "auto" }}
          >
            {events.map((event) => (
              <EventCard
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                img={event.img}
              />
            ))}
          </Stack>
        </Box>
      </div>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
         overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Favorites</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
  const renderIncomingReqSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
         overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Incoming Requests</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
 
  const renderhistoryEventsSection= () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
        overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">History of Events</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Nation"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography variant="h5" >
          My Account 
        </Typography>
        <Typography variant="caption" style={{marginTop:'0px'}}> For Promoters </Typography>
        <Divider />
        <List>
          {[
            {
              text: "Profile",
              icon: <AccountBoxIcon style={{ color: "white" }} />,
            },
            {
              text: "Tickets",
              icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
            },
            {
              text: "Favorites",
              icon: <FavoriteIcon style={{ color: "white" }} />,
            },
            {
              text: "History of Events",
              icon: <HistoryIcon style={{ color: "white" }} />,
            },
            {
              text: "Proposed events",
              icon: <CalendarViewDayIcon style={{ color: "white" }} />,
            }, 
            {
              text: "Incoming Requests",
              icon: <InsertDriveFileIcon style={{ color: "white" }} />,
            },
            {
              text: "Send a Request",
              icon: <ForwardToInboxIcon style={{ color: "white" }} />,
            },  
            
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      {renderSection()}
    </Box>
  );
}



export function AccountArtist() {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Tickets":
        return renderTicketSection();
      case "Favorites":
        return renderFavoritesSection();
      case "History of Events":
          return renderhistoryEventsSection();
      case "Artistic Works":
          return renderOpereSection();
      case "Attended Event":
          return renderAttendedEventSection();
      case "Request Participation":
        return <Request></Request>;
      default:
        return null;
    }
  };
 
  const renderTicketSection = () => {
    return (
        <Box
          style={{
            margin: "2rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "85vh",
            padding: "2rem",
            textAlign: "left",
            overflowX: "scroll" 
          }}
        >
          <Typography variant="h5">Your Tickets</Typography>
          <hr />
          <div >
            <Grid
            container
            direction={"row"}
            spacing={3}
            justifyContent={"space-around"}
            
          >
            {events.map((event) => (
             <Grid item md={5}> <CardLarge
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                prezzo={event.prezzo}
                descrizione={event.descrizione}
                img={event.img}
              /></Grid>
            ))}
          </Grid></div>
         
        </Box>
    );
  };

  const renderAttendedEventSection = () => {
    return (
      <div style={{ height: "auto", overflowY: "auto" }}>
        <Box
          style={{
            margin: "5rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5">Your Events</Typography>
          <hr />
          <Stack
            direction={"row"}
            spacing={6}
            justifyContent={"space-between"}
            style={{ overflowY: "scroll", margin: "auto" }}
          >
            {events.map((event) => (
              <EventCard
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                img={event.img}
              />
            ))}
          </Stack>
        </Box>
      </div>
    );
  };

  const renderFavoritesSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
         overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Favorites</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
  const renderOpereSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
        overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Artistic Works</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {opere.map((op) => (
         <Grid item md={5}> <CardOpere
            title={op.nome}
            description={op.descrizione}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
  const renderhistoryEventsSection= () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
        overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">History of Events</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Nation"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography variant="h5" >
          My Account 
        </Typography>
        <Typography variant="caption" style={{marginTop:'0px'}}> For Artists </Typography>
        <Divider />
        <List>
          {[
            {
              text: "Profile",
              icon: <AccountBoxIcon style={{ color: "white" }} />,
            },
            {
              text: "Tickets",
              icon: <ConfirmationNumberIcon style={{ color: "white" }} />,
            },
            {
              text: "Favorites",
              icon: <FavoriteIcon style={{ color: "white" }} />,
            },
            {
              text: "History of Events",
              icon: <HistoryIcon style={{ color: "white" }} />,
            },  {
              text: "Artistic Works",
              icon: <PaletteIcon style={{ color: "white" }} />,
            },
            {
              text: "Attended Events",
              icon: <CalendarViewDayIcon style={{ color: "white" }} />,
            },  
            {
              text: "Request Participation",
              icon: <ForwardToInboxIcon style={{ color: "white" }} />,
            },  
            
         
          
           
          
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      {renderSection()}
    </Box>
  );
}




export function AccountAdmin() {
  const [currentSection, setCurrentSection] = useState("Profile");
  const theme = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case "Profile":
        return renderProfileSection();
      // Aggiungi altri casi per le sezioni aggiuntive
      case "Incoming Requests":
        return renderIncomingReqSection();
      case "Support":
        return renderSupportSection();
      default:
        return null;
    }
  };
  
  const renderIncomingReqSection = () => {
    return (
      <div style={{ height: "auto", overflowY: "auto" }}>
        <Box
          style={{
            margin: "5rem",
            border: "groove 1px gray",
            borderRadius: "10px",
            height: "70vh",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5">Your Events</Typography>
          <hr />
          <Stack
            direction={"row"}
            spacing={6}
            justifyContent={"space-between"}
            style={{ overflowY: "scroll", margin: "auto" }}
          >
            {events.map((event) => (
              <EventCard
                nome={event.nome}
                organizzatore={event.organizzatore}
                data={event.data}
                img={event.img}
              />
            ))}
          </Stack>
        </Box>
      </div>
    );
  };

  const renderSupportSection = () => {
    return (
      <Box
      style={{
        margin: "2rem",
        border: "groove 1px gray",
        borderRadius: "10px",
        height: "85vh",
        padding: "2rem",
        textAlign: "left",
         overflowX: "scroll" 
      }}
    >
      <Typography variant="h5">Favorites</Typography>
      <hr />
      <div >
        <Grid
        container
        direction={"row"}
        spacing={3}
        justifyContent={"space-around"}
        
      >
        {events.map((event) => (
         <Grid item md={5}> <CardLarge
            nome={event.nome}
            organizzatore={event.organizzatore}
            data={event.data}
            prezzo={event.prezzo}
            descrizione={event.descrizione}
            img={event.img}
          /></Grid>
        ))}
      </Grid></div>
     
    </Box>
      );
  };
 

  const renderProfileSection = () => {
    return (
      <Box
        style={{
          height: "30rem",
          width: "40rem",
          padding: "2rem",
          backgroundColor: "#a0c4ff",
        }}
        className="center"
      >
        <div
          style={{
            backgroundColor: "#eaf4f4",
            height: "30rem",
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "1em" }}>
            Profile
          </Typography>
          <Grid
            container
            direction={"row"}
            spacing={3}
            style={{ justifyContent: "center" }}
          >
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Surname"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Date of Birth"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="City"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Nation"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Fiscal Code"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md="5">
              <TextField
                id="outlined-read-only-input"
                label="Role"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography variant="h5" >
          My Account 
        </Typography>
        <Typography variant="caption" style={{marginTop:'0px'}}> For Administrator </Typography>
        <Divider />
        <List>
          {[
            {
              text: "Profile",
              icon: <AccountBoxIcon style={{ color: "white" }} />,
            },
            {
              text: "Incoming Requests",
              icon: <InsertDriveFileIcon style={{ color: "white" }} />,
            },
            {
              text: "Support",
              icon: <HelpOutlineIcon style={{ color: "white" }} />,
            }, 
          
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      {renderSection()}
    </Box>
  );
}
