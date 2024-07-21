import React, { useRef } from 'react';
import { Box,  Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
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



const KeyPersonal = () => {
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
 '../images/rajiv.png',
  '../images/atul.png',
  '../images/anjali.png',
   
  ];

  const Cards = [
    'Rajiv Ranjan',
    'Atul Kumar',
    'Anjali Singh Rajpoot',
    
  ];

  const Degree=[
    'Mechanical Engineer',
    'Software Engineer',
    'Electrical Engineer'
  ]
  const Tagline=[
    'Founder',
    'Director',
    "Director",
    
  ]

  return (
    <Box>
      <SliderContainer>
        <Swiper
          ref={swiperRef}
         
          autoplay={{
            delay: 5000, // 3 seconds delay between slides
            disableOnInteraction: false, // Autoplay won't be disabled after manual interaction
          }}
          breakpoints={{
            240: { slidesPerView: 1 },  // Extra-small screens (xs)
            768: { slidesPerView: 1 },  // Small screens (sm)
            1024: { slidesPerView: 1 }, // Medium screens (md)
            1280: { slidesPerView: 3 }, // Large screens (lg)
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} >
              <center>
                  <Card className='hoverCard' sx={{width:{lg:"400px",xs:"300px",md:"400px",sm:"350px"}}} >
                    <center>

                        <CardMedia
                      component="img"
                      alt={`Card ${index + 1}`}
                      
                      image={image}
                      sx={{ objectFit: "contain",paddingTop:"10px",
                        height:{
                            xs:300,
                            lg:400,
                            md:400,
                            sm:350
                        },
                        width:{
                            xs:290,
                            lg:388,
                            md:390,
                            sm:340
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
                      </Typography><br/>
                      <Typography gutterBottom variant="p" color="text.secondary" sx={{fontSize:'1.0rem'}}>
                        {Degree[index]}
                      </Typography>
                    
                    </CardContent>
                  </Card>
                  </center>
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

export default KeyPersonal;
