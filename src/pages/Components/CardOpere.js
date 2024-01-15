import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import eventImage from "../../Assets/event3.jpg";
import { Typography,Stack,Button } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from "react-router-dom"
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function CardOpere ({description,title,id}){
  const navigate = useNavigate ()
    return(
        <Card style={{ width:'30rem' , textAlign:'center'}}>
        <CardMedia
          component="img"
          height="200"
          image={eventImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>  
          
        </CardContent>
        <hr style={{ color:'#d8d8d8', width:'80%'}}/>
        <Stack direction={'row'} justifyContent={'space-around'}>
        <Button endIcon={<BorderColorIcon/>}>Edit  </Button>
        <Button color='error' endIcon={<DeleteOutlineIcon/>}>Delete  </Button>
        </Stack>
      </Card>
    )

    


}
export default CardOpere;