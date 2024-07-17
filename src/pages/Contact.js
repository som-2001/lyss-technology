import { Box, Button, Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        delay: 1.5,
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
        delay: 1.8,
      }
    );
  }, []);

  return (
    <Box
      style={{
        overflowX: "hidden",
        backgroundColor: "whitesmoke",
        color: "#113",
        fontFamily: "math",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage: "url(./images/about.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflowX: "none",
          paddingTop: "12vw",
          paddingBottom: "10vw",
        }}
      >
        {scrollPosition > 150 && (
          <Button
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "10px",
              zIndex: "10",
              fontSize: "1.5rem",
            }}
            onClick={(e) => {
              window.scrollTo({
                top: "0px",
                behavior: "smooth",
              });
            }}
          >
            <IoMdArrowRoundUp />
          </Button>
        )}
        <Grid container>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <p style={{ fontSize: "3.9rem" }} id="hero">
              Contact us
            </p>
            <p
              style={{
                paddingBottom: "20px",
                fontSize: "1.2rem",
                marginLeft: "20px",
                fontWeight: "500",
              }}
              id="hero1"
            >
              If you have any questions, suggestions, or require assistance, please do not hesitate to reach out to us. We are here to help and look forward to hearing from you.
            </p>
          </Grid>
          <center>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <img src="./images/aboutPic.png" alt="" id="hero2" />
            </Grid>
          </center>
        </Grid>
      </Box>
      
      <Footer />
    </Box>
  );
};
