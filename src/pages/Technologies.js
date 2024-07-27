import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
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
            "url(https://cdn.prod.website-files.com/6420f704f2602a2ee7f79d26/646d4bb79ff76f75b218a08a_listicles-tech-image-large.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "bottom-center",
            lg: "center",
            md: "center",
            sm: "center",
          },
          backgroundSize: "cover",
          overflowX: "none",
          padding: "8.3rem 0rem 13rem 0rem",

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
            <p style={{ fontSize: "3.2rem", color: "white" }} id="hero">
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
              Explore our advanced technologies, all crafted to transform your
              business and address your specific requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "7rem" }}>
        <p
          style={{
            fontSize: "2.5rem",
            marginTop: "20px",
          }}
          className="header"
        >
          Our Technologies
        </p>

        <center>
          <Divider
            style={{
              padding: "0.5px",
              backgroundColor: "rgb(79 79 138)",
              width: "150px",
              marginTop: "-20px",
              marginBottom: "40px",
            }}
          />
        </center>
        <Grid container spacing={3} sx={{ padding: "20px" }}>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="HTML"
                height="140"
                image="../images/html.png"
                style={{ width: "140px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  HTML is the standard markup language for creating web pages.
                  It describes the structure of a webpage.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="CSS"
                height="140"
                image="../images/css.png"
                style={{ width: "140px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  CSS is used to control the style and layout of web pages. It
                  allows you to create visually appealing web pages.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="JavaScript"
                height="140"
                image="../images/js.png"
                style={{ width: "165px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  JavaScript is a programming language that allows you to
                  implement complex features on web pages.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Tailwind CSS"
                height="140"
                image="../images/tailwind.png"
                style={{ width: "150px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Tailwind CSS is a utility-first CSS framework for rapidly
                  building custom designs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="JSX"
                height="140"
                image="../images/jsx.png"
                style={{ width: "200px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  JSX is a syntax extension for JavaScript that looks similar to
                  XML or HTML. It is used with React to describe the UI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Material-UI"
                height="140"
                image="../images/Mui.png"
                style={{ width: "180px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Material-UI is a popular React UI framework that implements
                  Google's Material Design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="React"
                height="140"
                image="../images/react.png"
                style={{ width: "150px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  React is a JavaScript library for building user interfaces,
                  maintained by Facebook and a community of developers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Django"
                height="140"
                image="../images/django.png"
                style={{ width: "230px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Django is a high-level Python web framework that encourages
                  rapid development and clean, pragmatic design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="DynamoDB"
                height="140"
                image="../images/dynamo.png"
                style={{ width: "250px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Amazon DynamoDB is a key-value and document database that
                  delivers single-digit millisecond performance at any scale.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Docker"
                height="140"
                image="../images/Docker.png"
                style={{ width: "180px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Docker is a set of platform-as-a-service products that use
                  OS-level virtualization to deliver software in packages called
                  containers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="GSAP"
                height="140"
                image="../images/Gsap.png"
                style={{ width: "160px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  GSAP (GreenSock Animation Platform) is a suite of tools for
                  creating scripted, high-performance animations that work in
                  every major browser.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Canva"
                height="140"
                image="../images/canva.png"
                style={{ width: "250px", margin: "0 auto", paddingTop: "20px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Canva is an online graphic design platform, used to create
                  social media graphics, presentations, posters, documents, and
                  other visual content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};
