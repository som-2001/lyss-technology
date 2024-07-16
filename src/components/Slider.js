// import React from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { styled } from '@mui/system';
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// const SliderContainer = styled('div')({
//   width: '100%',
// });

// const SliderButton = styled(Button)({
//   margin: '10px',
//   padding:"12px",
//   fontSize:"1.2rem"
// });

// const Slider = () => {
//   const swiperRef = React.useRef(null);

//   const handlePrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const images = [
//     'https://www.atplc.in/Assets/Illustrator/Training.png',
//     'https://www.atplc.in/Assets/Illustrator/Training.png',
//     'https://www.atplc.in/Assets/Illustrator/Training.png',
//   ];

//   const Cards = [
//     'Trainings & Internships',
//     'Company Registrations',
//     'SmartOne'
//   ];

//   return (
//     <Box>
//       <SliderContainer>
//         <Swiper
//           ref={swiperRef}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },  // Extra-small screens (xs)
//             768: { slidesPerView: 1 },  // Small screens (sm)
//             1024: { slidesPerView: 2 }, // Medium screens (md)
//             1280: { slidesPerView: 2 }, // Large screens (lg)
//           }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Grid container justifyContent="center">
//                 <Grid item xs={11} sm={11} md={6} lg={9}>
//                   <Card>
//                     <CardMedia
//                       component="img"
//                       alt={`Card ${index + 1}`}
//                       height="300"
//                       image={image}
//                       sx={{ objectFit: "contain" }}
//                       onError={() => console.error(`Failed to load image: ${image}`)}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {Cards[index]}
//                       </Typography>
                    
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </SliderContainer>
//       <Box display="flex" justifyContent="center" mt={4} >
//         <SliderButton variant="outlined" color="primary" onClick={handlePrev}>
//           <FaArrowLeft/>
//         </SliderButton>
//         <SliderButton variant="outlined" color="primary" onClick={handleNext}>
//           <FaArrowRight/>
//         </SliderButton>
//       </Box>
//     </Box>
//   );
// };

// export default Slider;
