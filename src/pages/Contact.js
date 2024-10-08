import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";
import {
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdPerson,
  MdSubject,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../App.css";
import { Helmet } from "react-helmet";

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
      "#hero2",
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
        <title>Lyss Technology Pvt. Ltd. | Contact</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflowX: "none",
          paddingTop: "12vw",
          paddingBottom: "13vw",
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
              Contact us
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
                marginTop: "-50px",
                fontWeight: "500",
                color: "white",
              }}
              id="hero1"
            >
              If you have any questions, suggestions, or require assistance,
              please do not hesitate to reach out to us. We are here to help and
              look forward to hearing from you.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <span style={{ color: "blue", fontSize: "1.2rem" }}>Let's Connect</span>
        <br />
        <p style={{ fontSize: "3rem", marginTop: "15px" }} className="header">
          Contact Us
        </p>

        <Grid container spacing={6} sx={{ padding: "20px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              flexDirection: "column",
              display: "flex",
              gap: "10px",
              position: { lg: "relative" },
              left: { lg: "10px" },
            }}
          >
            <TextField
              type="text"
              placeholder="Name..."
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdPerson />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="text"
              required
              placeholder="Email..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdEmail />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="number"
              required
              placeholder="Phone..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdPhone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="text"
              required
              placeholder="Subject..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdSubject />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="text"
              required
              multiline
              rows={4}
              placeholder="Message..."
              fullWidth
            />

            <center>
              <Button
                variant="contained"
                id="button"
                sx={{
                  width: { lg: "30%", md: "40%", xs: "50%", sm: "40%" },
                  padding: "10px",
                  borderRadius: "25px",
                  backgroundColor: "#5656b9",
                }}
              >
                Send Message
              </Button>
            </center>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              flexDirection: "column",
              textAlign: "initial",
              marginLeft: { xs: "20px", lg: "0px", sm: "30px", md: "0px" },
            }}
          >
            <Typography variant="h4" mb={2} className="header">
              Get in touch
            </Typography>
            <Divider
              sx={{
                backgroundColor: "blue",
                width: { lg: "30vw", xs: "70vw", md: "40vw" },
                fontWeight: "700",
              }}
            />
            <Box my={2}>
              <Typography variant="h6" color="textPrimary">
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <MdLocationOn />
                  </Box>
                  <Box style={{ marginTop: "-3px" }}>Address</Box>
                </Box>
              </Typography>
              <Typography variant="body1" color="textSecondary">
                3/365, Aryan Bhawan
                <br />
                Lakho Binda Campus, Santunagar,
                <br />
                Madhubani (Bihar)-India
                <br />
                Pin-847211
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h6" color="textPrimary">
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <MdEmail />
                  </Box>
                  <Box style={{ marginTop: "-3px" }}>Email</Box>
                </Box>
              </Typography>
              <Typography variant="body1" color="textSecondary">
                contact2atplc@gmail.com
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h6" color="textPrimary">
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <MdPhone />
                  </Box>
                  <Box style={{ marginTop: "-3px" }}>Phone</Box>
                </Box>
              </Typography>
              <Typography variant="body1" color="textSecondary">
                +91 6205695667
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{display:{lg:"block",sm:"none",md:"block",xs:"none"}}}>
        <center>
          <p style={{ fontSize: "1.5rem" }}>Our Location</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.8442894520326!2d86.05868206913091!3d26.360327754064386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd395751078b%3A0x68c5636fd77c7b84!2sGopal%20Bhawan!5e0!3m2!1sen!2sin!4v1721764446264!5m2!1sen!2sin"
            width="750"
            height="400"
            title="map"
            style={{borderRadius:"15px",zoom:1.1 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
           
          ></iframe>
        </center>
      </Box>

     
      <Footer />
    </Box>
  );
};
