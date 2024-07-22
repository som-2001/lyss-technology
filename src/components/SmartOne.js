import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Navbar } from "./Navbar";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export const SmartOne = () => {
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
        <title>Lyss Technology Pvt. Ltd. | SmartOne</title>
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
              SmartOne
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
              SmartOne is an online platform designed to revolutionize the
              campus experience with advanced technology and seamless
              connectivity.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", marginTop: "50px" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "2.6rem", textAlign: "center" }}
        >
          Introduction
        </Typography>
        <center>
          <Divider
            style={{
              padding: "1px",
              backgroundColor: "rgb(79 79 138)",
              width: "180px",
              marginTop: "10px",
            }}
          />
        </center>
        <p
          style={{ padding: "30px", fontSize: "1.2rem", textAlign: "justify" }}
        >
          SmartOne is an innovative online platform designed to transform the
          campus experience through advanced technology and seamless
          connectivity. Our platform provides an integrated solution for
          students, faculty, and administration, ensuring efficient
          communication, streamlined processes, and enhanced engagement. With
          SmartOne, users can easily access campus resources, stay updated with
          real-time notifications. Our mission is to create a smarter, more
          connected campus environment that fosters collaboration and success
          for everyone involved.
        </p>
        <Grid container sx={{ padding: { lg: "50px" } }} spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <center>
              {" "}
              <CardMedia
                component="img"
                src="../images/smartOne.png"
                sx={{
                  width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                  marginTop: { lg: "200px", xs: "0px", md: "200px" },
                  height: "35vh",
                  objectFit: "contain",
                }}
                alt=""
              />
            </center>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#2E3B55" }}>
                Apply for Bonafide Certificate with SmartOne
              </h2>
              <p>
                SmartOne simplifies the process of applying for a bonafide
                certificate, ensuring students can easily obtain the necessary
                documentation for various purposes. Here's how it works:
              </p>
              <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
              <p>
                Our intuitive interface guides students through the application
                process, making it accessible for all users.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Easy Application Process</h3>
              <p>
                Students can log in to their SmartOne accounts and navigate to
                the 'Bonafide Certificate' section. Fill out a simple online
                form with essential details such as name, enrollment number,
                course, and purpose of the certificate. Review the entered
                information to ensure accuracy before submission.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Real-Time Status Updates</h3>
              <p>
                Once submitted, students receive real-time updates on the status
                of their application. Notifications are sent at each stage of
                the process, from application received to certificate ready for
                collection.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Efficient Processing</h3>
              <p>
                Our platform ensures that applications are processed promptly by
                the administrative staff. SmartOne streamlines the workflow,
                reducing manual intervention and speeding up the issuance of
                certificates.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: { lg: "50px" } }} spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#2E3B55" }}>
                Apply for Overall No Dues with SmartOne
              </h2>
              <p>
                SmartOne simplifies the process of applying for a Overall No Dues, ensuring students can easily obtain the necessary
                documentation for various purposes. Here's how it works:
              </p>
              <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
              <p>
                Our intuitive interface guides students through the application
                process, making it accessible for all users.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Easy Application Process</h3>
              <p>
                Students can log in to their SmartOne accounts and navigate to
                the 'Bonafide Certificate' section. Fill out a simple online
                form with essential details such as name, enrollment number,
                course, and purpose of the certificate. Review the entered
                information to ensure accuracy before submission.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Real-Time Status Updates</h3>
              <p>
                Once submitted, students receive real-time updates on the status
                of their application. Notifications are sent at each stage of
                the process, from application received to approved by all departments.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Efficient Processing</h3>
              <p>
                Our platform ensures that applications are processed promptly by
                the administrative staff. SmartOne streamlines the workflow,
                reducing manual intervention and speeding up the issuance of
                certificates.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <center>
              {" "}
              <CardMedia
                component="img"
                src="../images/smartOne1.png"
                sx={{
                  width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                  marginTop: { lg: "200px", xs: "0px", md: "200px" },
                  height: "35vh",
                  objectFit: "contain",
                }}
                alt=""
              />
            </center>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: { lg: "50px" } }} spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <center>
              {" "}
              <CardMedia
                component="img"
                src="../images/smartOne2.png"
                sx={{
                  width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                  marginTop: { lg: "200px", xs: "0px", md: "200px" },
                  height: "35vh",
                  objectFit: "contain",
                }}
                alt=""
              />
            </center>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#2E3B55" }}>
                Apply for Hostel Request with SmartOne
              </h2>
              <p>
                SmartOne simplifies the process of applying for a bonafide
                certificate, ensuring students can easily obtain the necessary
                documentation for various purposes. Here's how it works:
              </p>
              <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
              <p>
                Our intuitive interface guides students through the application
                process, making it accessible for all users.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Easy Application Process</h3>
              <p>
                Students can log in to their SmartOne accounts and navigate to
                the 'Bonafide Certificate' section. Fill out a simple online
                form with essential details such as name, enrollment number,
                course, and purpose of the certificate. Review the entered
                information to ensure accuracy before submission.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Real-Time Status Updates</h3>
              <p>
                Once submitted, students receive real-time updates on the status
                of their application. Notifications are sent at each stage of
                the process, from application received to certificate ready for
                collection.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Efficient Processing</h3>
              <p>
                Our platform ensures that applications are processed promptly by
                the administrative staff. SmartOne streamlines the workflow,
                reducing manual intervention and speeding up the issuance of
                certificates.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};
