import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
export function EventCard({nome,descrizione,organizzatore,prezzo,data,img}){
    const navigate = useNavigate();
    return (
        <Box
        style={{
          width: "15rem",
          padding: "0.5rem",
        }}
      >
        <img src={img} style={{  border: '1px solid #ddd', bordeRadius: '4px', padding: '5px', width: '14rem', height: '14rem' }}></img>
        <Typography component={'b'} variant="h5" >{nome}</Typography>
        <Typography variant="subtitle">{`  By: ${organizzatore}`}</Typography>
        <br/>
        <Typography variant="subtitle"><b>On:</b>{`  ${data} `}</Typography>
       
        <Typography variant="body1"> <p>About this Event: </p> <pre>{`${descrizione} `}</pre></Typography>
       <hr/> <Typography variant="body1"><b>Price:</b>{`   ${prezzo} `}</Typography>
       <div     style={{
          textAlign:'center'
        }}>
            <Button onClick={()=>{navigate('/EventPage',{replace:true, state:{nome,descrizione,organizzatore,prezzo,data,img}})}}>
                Show More
                </Button>
                </div>
        </Box>
    )
}