import React, { useRef } from 'react';
import { Box,  Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from '@mui/system';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import '../App.css';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Autoplay } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

const SliderContainer = styled('div')({
  width: '100%',
});



const OurTeam = () => {
  const swiperRef = useRef(null);

 
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const images = [
  '../images/amarnath.jpg',
  '../images/someswar.jpg',
  '../images/siddharth.jpg',
  '../images/md.jpg'
  ];

  const Cards = [
    'Amarnath Apuri',
    'Someswar Gorai',
    'Siddharth Maddheshiya',
    'Md Mushfikur Talukdar'
  ];

  const Tagline=[
    'Backend Developer',
    "Frontend Developer",
    "Frontend Developer",
    "Frontend Developer"
    
  ]

  return (
    <Box>
      <SliderContainer>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Autoplay won't be disabled after manual interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 },  // Extra-small screens (xs)
            768: { slidesPerView: 1 },  // Small screens (sm)
            1024: { slidesPerView: 1 }, // Medium screens (md)
            1280: { slidesPerView: 1 }, // Large screens (lg)
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} >
              <Grid container justifyContent="center">
                <Grid item xs={11} sm={11} md={11} lg={8} >
                    <center>
                  <Card className='hoverCard' sx={{width:{lg:400,xs:300,md:400,sm:350}}}>
                    <center>
                        <CardMedia
                      component="img"
                      alt={`Card ${index + 1}`}
                      
                      image={image}
                      sx={{ objectFit: "cover",
                        height:{
                            xs:230,
                            lg:290,
                            md:400,
                            sm:300
                        },
                        width:{
                            xs:300,
                            lg:427,
                            md:400,
                            sm:350
                        }
                       }}
                      onError={() => console.error(`Failed to load image: ${image}`)}
                    /></center>
                    <CardContent>
                      <Typography gutterBottom variant="p" color="text.secondary" component="div" sx={{fontSize:'1.4rem'}}>
                        {Cards[index]}
                      </Typography>
                      <Divider style={{padding:"1px",backgroundColor:"rgb(79 79 138)",width:"80px",marginBottom:"10px"}}/>
                      <Typography gutterBottom variant="p" color="text.secondary" sx={{fontSize:'1.0rem'}}>
                        {Tagline[index]}
                      </Typography>
                    
                    </CardContent>
                  </Card>
                  </center>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
      <Box display="flex" justifyContent="center" mt={4} gap={5} >
       
          <RiArrowLeftSLine onClick={handlePrev} style={{fontSize:"1.2rem"}}/>
       
      
          <MdOutlineKeyboardArrowRight onClick={handleNext} style={{fontSize:"1.2rem"}}/>
      
      </Box>
    </Box>
  );
};

export default OurTeam;
