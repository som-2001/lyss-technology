import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

export const Gallary = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.0,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#hero1",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
      }
    );
  }, []);
    useGSAP(() => {
        gsap.fromTo(
          "#text00",
          {
            opacity: 0,
            y: -150,
          },
          {
            opacity: 1,
            y: 0,
            delay: 1.8,
          }
        );
      }, []);

      useGSAP(() => {
        gsap.fromTo(
          "#text001",
          {
            opacity: 0,
            y: -150,
          },
          {
            opacity: 1,
            y: 0,
            delay: 2.2,
          }
        );
      }, []);

    const images = [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ];
  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "whitesmoke",
        color: "#113",
        fontFamily: "math",
      }}
    >
      <Helmet>
        <title>Lyss Technology Pvt. Ltd. | Gallary</title>
      </Helmet>
      <Navbar />
      {scrollPosition > 150 && (
          <Button
            id="button"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "10px",
              zIndex: "10",
              fontSize: "1.5rem",
              backgroundColor:"#7a7ad4",
              borderRadius: "59px",
            }}
            onClick={(e) => {
              window.scrollTo({
                top: "0px",
                behavior: "smooth",
              });
            }}
          >
            <IoMdArrowRoundUp style={{color:"white"}}/>
          </Button>
        )}
     
     <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage:
            "url(https://bynder.southbankcentre.co.uk/m/39ace083e6934d96/original/03-Installation-view-of-Bridget-Riley-at-Hayward-Gallery-2019-Bridget-Riley-2019-Photo-Stephen-White-Co-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {xs:"left",lg:"center",md:"center",sm:"center"},
          backgroundSize: "cover",
          overflowX: "none",
          padding: "6.3rem 0rem 15rem 0rem",

          height: "100%",
        }}
      >
        {scrollPosition > 150 && (
          <Button
            id="button"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "10px",
              zIndex: "10",
              fontSize: "1.5rem",
              backgroundColor: "#7a7ad4",
            }}
            onClick={(e) => {
              window.scrollTo({
                top: "0px",
                behavior: "smooth",
              });
            }}
          >
            <IoMdArrowRoundUp style={{ color: "white" }} />
          </Button>
        )}
        <Grid container>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <p style={{ fontSize: "2.6rem",color:"black" }} id="hero" className="header">
            Lyss Technology Gallery
            </p>
            <Typography
              variant="h1"
              sx={{
                paddingBottom: "20px",
                fontSize: "1.2rem",
                marginLeft: {
                  lg: "20px",
                  xs: "0px",
                  sm: "0px",
                  md: "20px",
                },
                padding: {
                  lg: "0px",
                  xs: "20px",
                  sm: "10px",
                  md: "0px",
                },
                fontWeight: "500",
                color: "black",
                marginTop: "-20px",
              }}
              id="hero1"
            >
             You'll find a collection of images that showcase
             our innovative projects, cutting-edge technology, and vibrant work environment.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{marginTop:"20px"}}>
        <p style={{marginTop:"-0%",textAlign:"center",fontSize:"2.5rem",fontWeight:"600"}} id="text001" className="header">Showroom</p>
        <center>
          <Divider
            style={{
              padding: "0.5px",
              backgroundColor: "rgb(79 79 138)",
              width: "80px",
              marginTop: "-29px",
              marginBottom: "40px",
            }}
          />
        </center>
        <p style={{marginTop:"-2%",textAlign:"center",fontSize:"1.2rem",fontWeight:"600"}} id="text001">A Visual Journey Through Our World.</p>
      </Box>

      <Box  id="text001">
      <Grid container spacing={2}  sx={{padding:"20px"}} textAlign={"center"}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Gallery Image ${index + 1}`}
              sx={{
                width: {lg:"80%",md:"80%",xs:"95%",sm:"95%"},
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
      <Footer/>
    </Box>
  );
};
