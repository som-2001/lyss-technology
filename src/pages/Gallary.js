import { Box, Button, Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";

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
              backgroundColor:"#7a7ad4"
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
          backgroundImage: "url(./images/chairs.jpg)",
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflowX: "none",
          paddingTop: { xs: "24vw", sm: "18vw", md: "15vw", lg: "12vw" },
          paddingBottom: { xs: "20vw", sm: "15vw", md: "12vw", lg: "12vw" },
          filter: "brightness(0.5)",
          height: "30vh",
        }}
      ></Box>

      <Box
        sx={{
          fontSize: { xs: "15.4pt", sm: "23pt", md: "26pt", lg: "30pt" },
          fontWeight: "600",
          position: "relative",
          top: { xs: "-220px", sm: "-220px", md: "-350px", lg: "-320px" },
          left: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
          color: "white",
          textAlign: { xs: "center", lg: "center" },
        }}
      >
        <Typography variant="h4" sx={{ fontSize: {lg:"3.5rem",xs:"2.0rem",md:"3.5rem",sm:"2.0rem" }}}  id="text00" >
        Lyss Technology Gallery
        </Typography>

        <Typography variant="body1" sx={{ display:{xs:"none",md:"block",sm:"block",lg:"block"}, fontSize: "1.2rem",marginLeft:{lg:"40px"} }}  id="text001">
        You'll find a collection of images that showcase<br/> our innovative projects, cutting-edge technology, and vibrant work environment.
        </Typography>

        <Typography variant="body1" sx={{ display:{xs:"block",md:"none",sm:"none",lg:"none"}, fontSize: "1.2rem",marginLeft:{lg:"40px",xs:"0px",sm:"0px",md:"0px"},padding:"10px",wordWrap:"break-word",wordBreak:"break-word" }}  id="text001">
        You'll find a collection of images <br/> of our Company.
        </Typography>
      </Box>

      <Box>
        <p style={{marginTop:"-0%",textAlign:"center",fontSize:"2.5rem",fontWeight:"600"}} id="text001" className="header">Showroom</p>
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
