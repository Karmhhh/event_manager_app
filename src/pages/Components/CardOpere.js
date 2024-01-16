import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import eventImage from "../../Assets/event3.jpg";
import { Typography, Stack, Grid, IconButton, Divider } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function CardOpere({ description, title, id }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "20rem", textAlign: "center" }}>
      <CardMedia
        component="img"
        height="200"
        image={eventImage}
        alt="green iguana"
      />
      <Grid container direction={"row"} justifyContent={"space-around"}>
        <Grid item>
          {" "}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
          {" "}
          <Stack direction={"column"} spacing={2} justifyContent={"space-around"}>
            <IconButton aria-label="edit" color="primary">
              <BorderColorIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
export default CardOpere;
