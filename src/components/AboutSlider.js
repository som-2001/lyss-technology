import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { styled } from "@mui/system";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import "../App.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const SliderContainer = styled("div")({
  width: "100vw",
});

const SliderButton = styled("div")({
  fontSize: "1.2rem",
  cursor: "pointer",
  margin: "0 10px",
});

const AboutSlider = () => {
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
    "https://media.istockphoto.com/id/1304715784/vector/work-and-life-balance-tiny-woman-sitting-in-lotus-position-and-keep-harmony-choose-between.jpg?s=612x612&w=0&k=20&c=2oEMNKI8TuqE0QvetiK0_6xWI1ut3VwheOzqNZYG9kg=",
    "https://img.freepik.com/free-vector/work-anniversary-illustration_23-2150176802.jpg",
    "https://www.kindpng.com/picc/m/208-2088875_employee-communication-platform-illustration-communication-platform-hd-png.png",
    "https://www.shutterstock.com/image-vector/coach-speaking-before-audience-mentor-600nw-1793766322.jpg",
  ];

  const Cards = ["Work-Life Balance", "Celebrating Together", "Employee Communication", "Training and Guidance"];

  const Tagline = [
    'We ensure to provide our employees with a proper work-life balance. Our management encourages our team to take their time offs and manage a proper balance between their personal and professional life.',

    'Be it an achievement or a celebration, a team that celebrates together stays together. We believe in this culture, and hence, our team celebrates every occasion together. It creates a strong bond between us.',

    "Maintaining thorough and excellent employee communication is one of the major parts of our company culture. Our management ensures to have frequent communication with employees to know them better.  Solutions transformed our business operations. The customized software and innovative strategies boosted our productivity significantly. Their team's expertise and dedication to our success were evident throughout the process.",

    'Our team leads ensure to provide proper training and guidance to the new and junior team members. It keeps them abreast with the latest evolvement of the market and also improves their proficiency.',
  ];

  return (
    <Box>
      <SliderContainer>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          autoplay={{
            delay: 5000, // 3 seconds delay between slides
            disableOnInteraction: false, // Autoplay won't be disabled after manual interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Extra-small screens (xs)
            768: { slidesPerView: 1 }, // Small screens (sm)
            1024: { slidesPerView: 1 }, // Medium screens (md)
            1280: { slidesPerView: 1 }, // Large screens (lg)
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <center>
                <Box>
                  <Card sx={{ maxWidth: "880px" }} variant="outlined">
                    <Grid container>
                      <Grid item lg={4} sm={12} xs={12} md={12}>
                        <center>
                          <CardMedia
                            component="img"
                            alt={`Card ${index + 1}`}
                            image={image}
                            sx={{
                              objectFit: "cover",
                              height: {
                                xs: 230,
                                lg: 320,
                                md: 400,
                                sm: 300,
                              },
                              width: {
                                xs: 350,
                                lg: 300,
                                md: 400,
                                sm: 300,
                              },
                              marginRight: {
                                lg: "10px",
                                xs: "0px",
                                md: "0px",
                                sm: "0px",
                              },
                            }}
                            onError={() =>
                              console.error(`Failed to load image: ${image}`)
                            }
                          />
                        </center>
                      </Grid>
                      <Grid
                        item
                        lg={8}
                        sm={12}
                        xs={12}
                        md={12}
                        textAlign="center"
                      >
                        <CardContent >
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontSize: "1.4rem" }}
                          >
                            {Cards[index]}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "1.0rem",marginTop:{
                              lg:"50px"
                            } }}
                          >
                            {Tagline[index]}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              </center>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
      <Box display="flex" justifyContent="center" mt={4} gap={5}>
        <SliderButton onClick={handlePrev}>
          <RiArrowLeftSLine />
        </SliderButton>
        <SliderButton onClick={handleNext}>
          <MdOutlineKeyboardArrowRight />
        </SliderButton>
      </Box>
    </Box>
  );
};

export default AboutSlider;
