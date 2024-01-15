import { EventCard } from "./Components/EventCard";
import Divider, { Typography,Grid } from "@mui/material";
import { Box, Stack } from "@mui/material";
import event1 from '../Assets/event1.jpg'
import event2 from '../Assets/event2.jpg'
import event3 from '../Assets/event3.jpg'
export const Catalog = () => {

const events = [
    {
        "eventId": 4,
        "eventName": "Sarà davvero una torta?",
        "eventDescription": "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
        "maximumCapacity": 70,
        "startDate": "2024-05-20",
        "endDate": "2024-05-20",
        "eventCategory": "Cucina",
        "eventRegion": "Lazio",
        "eventPrice": "$ 23,54",
        "eventPromoter": "Mark Datels",
        "emailOrganizzatore": "Mark_Datels@exemple.xyz",
        img: event3
        },
        {
            "eventId": 4,
            "eventName": "Sarà davvero una torta?",
            "eventDescription": "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
            "maximumCapacity": 70,
            "startDate": "2024-05-20",
            "endDate": "2024-05-20",
            "eventCategory": "Cucina",
            "eventRegion": "Lazio",
            "eventPrice": "$ 23,54",
            "eventPromoter": "Mark Datels",
            "emailOrganizzatore": "Mark_Datels@exemple.xyz",
            img: event3
            },
            {
                "eventId": 4,
                "eventName": "Sarà davvero una torta?",
                "eventDescription": "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
                "maximumCapacity": 70,
                "startDate": "2024-05-20",
                "endDate": "2024-05-20",
                "eventCategory": "Cucina",
                "eventRegion": "Lazio",
                "eventPrice": "$ 23,54",
                "eventPromoter": "Mark Datels",
                "emailOrganizzatore": "Mark_Datels@exemple.xyz",
                img: event3
                },
                {
                    "eventId": 4,
                    "eventName": "Sarà davvero una torta?",
                    "eventDescription": "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
                    "maximumCapacity": 70,
                    "startDate": "2024-05-20",
                    "endDate": "2024-05-20",
                    "eventCategory": "Cucina",
                    "eventRegion": "Lazio",
                    "eventPrice": "$ 23,54",
                    "eventPromoter": "Mark Datels",
                    "emailOrganizzatore": "Mark_Datels@exemple.xyz",
                    img: event3
                    },
                    {
                        "eventId": 4,
                        "eventName": "Sarà davvero una torta?",
                        "eventDescription": "Se sei un appassionato di dolci e ami le sorprese, facciamo al caso tuo!",
                        "maximumCapacity": 70,
                        "startDate": "2024-05-20",
                        "endDate": "2024-05-20",
                        "eventCategory": "Cucina",
                        "eventRegion": "Lazio",
                        "eventPrice": "$ 23,54",
                        "eventPromoter": "Mark Datels",
                        "emailOrganizzatore": "Mark_Datels@exemple.xyz",
                        img: event3
                        },
        
   
]

    return(<>
          <Box 
            style={{
            margin:'3rem', 
            border: "groove 1px gray",
            borderRadius: "10px",
            height: '75vh',
            padding: '1rem',
            textAlign: 'left',
            overflowX:'scroll'
            }}>
            <Typography variant="h5">Our Events</Typography>
            <hr/>
            <Grid margin={'4rem'} container direction={'row'} justifyContent={'space-around'} >
                {events.map((event)=>(
                  <Grid item md={3}><EventCard emailOrganizzatore = {event.emailOrganizzatore} luogo={event.eventRegion} categoria={event.eventCategory} nome={event.eventName} organizzatore={event.eventPromoter} startDate={event.startDate}  endDate={event.endDate} prezzo={event.eventPrice} descrizione={event.eventDescription} img={event.img}/>
                </Grid>))}

            </Grid>
        </Box>
     
    
    
    </>
      
    )
};