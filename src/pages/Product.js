import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";

export const Product = () => {
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
          backgroundImage: "url(./images/about.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
            <p style={{ fontSize: "3.9rem" }} id="hero" className="header">
              Products
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
              }}
              color="text.secondary"
              id="hero1"
            >
              Explore our innovative software, cutting-edge hardware, and comprehensive IT solutions, all designed to elevate your business and meet your unique needs.


            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>


      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "2.5rem", marginTop: "20px" }} className="header">
          Products
        </p>
        <center><Divider style={{padding:"1px",backgroundColor:"rgb(79 79 138)",width:"80px",marginTop:"-20px"}}/></center>
        <p>
            hrllooo
        </p>
    
      </Box>
    </Box>
  );
};
