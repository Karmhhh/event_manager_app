
import { useLocation } from "react-router-dom"
import { Box, Typography } from "@mui/material";
export function EventPage(props){
    
    const location = useLocation();
  console.log(location.state.nome)
    return(
        <>
        <Box style={{backgroundImage: `url(${location.state.img})`, backgroundSize: 'cover',color:'white', height:'50vh',margin:'1rem 3rem',textAlign:'left', padding:'3rem'}}>
            <div style={{backdropFilter: 'blur(10px)',}}><Typography variant="h4">{location.state.nome}</Typography>
            <Typography variant="body1">{location.state.descrizione}</Typography>
       </div>
             </Box>
        </>
    )
}