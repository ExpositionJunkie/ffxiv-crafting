import React from "react";
import Card from "@mui/material/card";
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea} from "@mui/material";
//import { Avatar } from "@material-ui/core";

export default function CharCard({user}) {
    const {Avatar, Name, ID, Server } = user;
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Avatar}
          alt="Avatar for Character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ID}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Server}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
