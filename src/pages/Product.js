import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCards";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";

export const Product = () => {

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
  return (
    <Box
      style={{
        overflowX: "hidden",
        backgroundColor: "whitesmoke",
        color: "#113",
        fontFamily: "math",
      }}
    >
      <Helmet>
        <title>Lyss Technology Pvt. Ltd. | Product</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage:
            "url(https://www.freemind.media/wp-content/uploads/2022/10/bg-webdesign.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {xs:"bottom-center",lg:"center",md:"center",sm:"center"},
          backgroundSize: "cover",
          overflowX: "none",
          padding: "5.3rem 0rem 13rem 0rem",

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
            <p style={{ fontSize: "3.9rem",color:"white" }} id="hero">
             Our Products
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
                color: "white",
                marginTop: "-20px",
              }}
              id="hero1"
            >
              Explore our innovative software, cutting-edge hardware, and
              comprehensive IT solutions, all designed to elevate your business
              and meet your unique needs.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <p
          style={{
            fontSize: "2.5rem",
            marginTop: "20px",
           
          }}
          className="header"
        >
          Our Products
        </p>
        <center>
          <Divider 
            style={{
              padding: "0.5px",
              backgroundColor: "rgb(79 79 138)",
              width: "80px",
              marginTop: "-20px",
              marginBottom: "40px",
            }}
          />
        </center>
        <Box >
          <ProductCard />
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};
