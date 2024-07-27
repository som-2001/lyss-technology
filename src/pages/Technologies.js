import { Box, Button, Grid, Typography } from "@mui/material";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Navbar } from "../components/Navbar";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import Footer from "../components/Footer";

export const Technologies = () => {
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
        <title>Lyss Technology Pvt. Ltd. | Technologies</title>
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
          backgroundPosition: {
            xs: "bottom-center",
            lg: "center",
            md: "center",
            sm: "center",
          },
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
              borderRadius: "59px",
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
            <p style={{ fontSize: "3.9rem", color: "white" }} id="hero">
              Our Technologies
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
              Explore our advanced technologies, all crafted to transform your business and address your specific requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "7rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/html.png" alt="HTML" style={{ width: "140px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
           
            <Typography variant="body1">
              HTML is the standard markup language for creating web pages.<br/> It describes the structure of a webpage.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/css.png" alt="CSS" style={{ width: "140px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
                       <Typography variant="body1">
              CSS is used to control the style and layout of web pages.<br/> It allows you to create visually appealing web pages.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/js.png" alt="JavaScript" style={{ width: "165px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              JavaScript is a programming language that allows you to implement complex features on web pages.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/tailwind.png" alt="Tailwind CSS" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/jsx.png" alt="JSX" style={{ width: "180px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
                       <Typography variant="body1">
              JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe the UI.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/Mui.png" alt="Material-UI" style={{ width: "180px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Material-UI is a popular React UI framework that implements Google's Material Design.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/react.png" alt="React" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/django.png" alt="Django" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/dynamo.png" alt="DynamoDB" style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/Docker.png" alt="Docker" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/Gsap.png" alt="GSAP" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
                        <Typography variant="body1">
              GSAP (GreenSock Animation Platform) is a suite of tools for creating scripted, high-performance animations that work in every major browser.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <img src="../images/canva.png" alt="Canva" style={{ width: "150px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            
            <Typography variant="body1">
              Canva is an online graphic design platform, used to create social media graphics, presentations, posters, documents, and other visual content.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};
