import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AboutCards({item}) {
  return (
    <Card sx={{ maxWidth: 495 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={item.image}
          alt="loading..."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
