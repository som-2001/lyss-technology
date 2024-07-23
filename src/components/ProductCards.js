import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Divider, Grid, Box } from '@mui/material';

const heading = [
  'SmartOne',
  'ATPLC'
];

const Links=[
  '/smartOne',
  '/Atplc'
]

const images=[
 
    'https://cdn.azeusconvene.com/wp-content/uploads/01222020_University_Banner.jpg',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D'
]

const para = [
  'SmartOne is an online platform designed to revolutionize the campus experience with advanced technology and seamless connectivity.Our solution ensures that students and staff stay connected and engaged like never before.',

  'ATPLC is a club to enhance practical learning among tech-students in their field of interest.Initiated in 2020, this club aim at enhancing and motivating students to learn proper stack of skills apart from semester syllabus to become professionally fit.'
];

export default function ProductCard() {
  return (
    <center>
    <Grid container>
      {heading.map((title, index) => (
       
        <Grid item key={index} xs={12} sm={6} md={6} lg={6} >
          <Card  sx={{ width: { lg: 550, xs: 320, md: 400, sm: 350 },marginBottom:"20px"}}>
            <Box display="flex" justifyContent="center">
              <CardMedia
                component="img"
                alt={`Card ${index + 1}`}
                image={images[index]} // Replace this with your actual image URL
                sx={{
                  objectFit: "cover",
                  height: {
                    xs: 230,
                    lg: 290,
                    md: 400,
                    sm: 300
                  },
                  width: {
                    xs: 320,
                    lg: 550,
                    md: 400,
                    sm: 350
                  }
                }}
                onError={() => console.error(`Failed to load image: your-image-url-here`)}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" color="text.secondary" component="div" sx={{ fontSize: '1.4rem' }}>
                {title}
              </Typography>
              <Divider style={{ padding: "1px", backgroundColor: "rgb(79 79 138)", width: "80px", marginBottom: "10px" }} />
              <Typography gutterBottom variant="body1" color="text.secondary" sx={{ fontSize: '1.0rem' }}>
                {para[index]}
              </Typography>
              <br />
              <CardActions>
                <Button variant='contained' id='button' sx={{width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                    padding: "10px",
                    borderRadius: "25px",
                    backgroundColor: "#5656b9",}} onClick={(e)=>window.location.href=Links[index]}>View Product</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </center>
  );
}
