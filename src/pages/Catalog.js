import { EventCard } from "./Components/EventCard";
import Divider, { Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import event1 from '../Assets/event1.jpg'
import event2 from '../Assets/event2.jpg'
import event3 from '../Assets/event3.jpg'
export const Catalog = () => {

const events = [
    {
        nome:'Comicon',
        organizzatore: 'Marck jset',
        data: 'Sat, 03 May 22',
        prezzo:' 12$',
        descrizione: 'lorem impsWEEEjdhuceh',
        img: event1
    },
    {
        nome:'Romix',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 17$',
        descrizione: 'loDXSCErem impsjdhuceh',
        img: event2
    },
    {
        nome:'Lucca',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 10$',
        descrizione: 'lorem impsjdWFEEWEFhuceh',
        img: event3
    },
    {
        nome:'comicon',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 12$',
        descrizione: 'lorem impsWEEEjdhuceh',
        img: event1
    },
    {
        nome:'Romix',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 17$',
        descrizione: 'loDXSCErem impsjdhuceh',
        img: event2
    },
    {
        nome:'Lucca',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 10$',
        descrizione: 'lorem impsjdWFEEWEFhuceh',
        img: event3
    },
    {
        nome:'Comicon',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 12$',
        descrizione: 'lorem impsWEEEjdhuceh',
        img: event1
    },
    {
        nome:'Romix',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 17$',
        descrizione: 'loDXSCErem impsjdhuceh',
        img: event2
    },
    {
        nome:'Lucca',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 10$',
        descrizione: 'lorem impsjdWFEEWEFhuceh',
        img: event3
    },
    {
        nome:'Comicon',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 12$',
        descrizione: 'lorem impsWEEEjdhuceh',
        img: event1
    },
    {
        nome:'Romix',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 17$',
        descrizione: 'loDXSCErem impsjdhuceh',
        img: event2
    },
    {
        nome:'Lucca',
        organizzatore: 'Marck jset',
        data:  'Sat, 03 May 22',
        prezzo:' 10$',
        descrizione: 'lorem impsjdWFEEWEFhuceh',
        img: event3
    },
]

    return(<>
          <Box style={{
            margin:'5rem', 
            border: "groove 1px gray",
            borderRadius: "10px",
            height: '70vh',
            padding: '1rem',
            textAlign: 'left'}}>,
           
            <Typography variant="h5">Strong Contrast</Typography>
            <hr/>
            <Stack direction={'row'} spacing={6} justifyContent={'space-between'} style={{overflowY:'scroll', margin:'3rem'}}>
                {events.map((event)=>(
                  <EventCard nome={event.nome} organizzatore={event.organizzatore} data={event.data} prezzo={event.prezzo} descrizione={event.descrizione} img={event.img}/>
                 
                ))}

            </Stack>
        </Box>
        <Box style={{
            margin:'5rem', 
            border: "groove 1px gray",
            borderRadius: "10px",
            height: '70vh',
            padding: '1rem',
            textAlign: 'left'}}>,
           
            <Typography variant="h5">Different</Typography>
            <hr/>
            <Stack direction={'row'} spacing={6} justifyContent={'space-between'} style={{overflowY:'scroll', margin:'3rem'}}>
                {events.map((event)=>(
                  <EventCard nome={event.nome} organizzatore={event.organizzatore} data={event.data} prezzo={event.prezzo} descrizione={event.descrizione} img={event.img}/>
                 
                ))}

            </Stack>
        </Box>
        <Box style={{
            margin:'5rem', 
            border: "groove 1px gray",
            borderRadius: "10px",
            height: '70vh',
            padding: '1rem',
            textAlign: 'left'}}>,
           
            <Typography variant="h5">Dark</Typography>
            <hr/>
            <Stack direction={'row'} spacing={6} justifyContent={'space-between'} style={{overflowY:'scroll', margin:'3rem'}}>
                {events.map((event)=>(
                  <EventCard nome={event.nome} organizzatore={event.organizzatore} data={event.data} prezzo={event.prezzo} descrizione={event.descrizione} img={event.img}/>
                 
                ))}

            </Stack>
        </Box>
        <Box style={{
            margin:'5rem', 
            border: "groove 1px gray",
            borderRadius: "10px",
            height: '70vh',
            padding: '1rem',
            textAlign: 'left'}}>,
           
            <Typography variant="h5">Horror</Typography>
            <hr/>
            <Stack direction={'row'} spacing={6} justifyContent={'space-between'} style={{overflowY:'scroll', margin:'3rem'}}>
                {events.map((event)=>(
                  <EventCard nome={event.nome} organizzatore={event.organizzatore} data={event.data} prezzo={event.prezzo} descrizione={event.descrizione} img={event.img}/>
                 
                ))}

            </Stack>
        </Box>
    
    
    </>
      
    )
};