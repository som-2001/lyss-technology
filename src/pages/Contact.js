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
import '../App.css'


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
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage: "url(https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
        <Grid container>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <p style={{ fontSize: "3.9rem",color:"white" }} id="hero" >
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
                fontWeight: "500",
                color:"white"
              }}
              id="hero1"
            >
              If you have any questions, suggestions, or require assistance,
              please do not hesitate to reach out to us. We are here to help and
              look forward to hearing from you.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}>
           
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <span style={{ color: "blue", fontSize: "1.2rem" }}>Let's Connect</span>
        <br />
        <p style={{ fontSize: "3rem", marginTop: "15px" }}>Contact Us</p>

        <Grid container spacing={6} sx={{ padding: "10px" }}>
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
                  padding:"10px",
                  borderRadius:"25px",
                  backgroundColor:"#5656b9"
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
            sx={{ flexDirection: "column", textAlign: "initial",marginLeft:{xs:"20px",lg:"0px",sm:"30px",md:"0px"} }}
          >
            <Typography variant="h4" color="textPrimary" mb={2}>
              Get in touch
            </Typography>
            <Divider
              sx={{
                backgroundColor: "blue",
                width: { lg: "30vw", xs: "70vw", md: "40vw" },
                fontWeight: "700",
              }}
            />
            <Box my={2} >
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
      <Footer />
    </Box>
  );
};
