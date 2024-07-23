import {
    Box,
    Button,
    CardMedia,
    Divider,
    Grid,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import Footer from "../components/Footer";
  import { IoMdArrowRoundUp } from "react-icons/io";
  import { Helmet } from "react-helmet";
  import { Navbar } from "../components/Navbar";
  import { useGSAP } from "@gsap/react";
  import { gsap } from "gsap/dist/gsap";
  
  export const Crcs = () => {
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
        "#button",
        {
          opacity: 0,
          y: -150,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1.4,
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
          <title>Lyss Technology Pvt. Ltd. | Company Registration & Compliance</title>
        </Helmet>
        <Navbar />
        <Box
          sx={{
            width: "100vw",
            textAlign: "center",
            marginTop: "50px",
            backgroundImage:
              "url(https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg)",
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
              onClick={() => {
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
              <p style={{ fontSize: "2.6rem" }} id="hero" className="header">
                CRCS
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
                Simplifying Company Registration and Ensuring Compliance
              </Typography>
              <Button 
                variant='contained' 
                id='button' 
                sx={{
                  width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                  padding: "10px",
                  borderRadius: "25px",
                  marginTop:"20px",
                  backgroundColor: "#5656b9",
                }}
                onClick={() => window.location.href="/underdevelopment"}
              >
                Visit Now
              </Button>
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
          <Typography component="div"
            sx={{ padding: "30px", fontSize: "1.1rem", textAlign: {lg:"justify",md:"justify",xs:"initial" }}}
          >
            Our Company Registration and Compliance Services are designed to streamline the process of setting up and maintaining a business. Since our inception, we have been committed to helping businesses navigate the complex legal and regulatory landscape, ensuring that they remain compliant with all relevant laws and regulations.
          </Typography>
          <center>
          <p style={{ fontSize: "1.5rem",fontWeight:"600" }}>Key Features of Our Services</p>
          </center>
          <center>
            <Divider
              style={{
                padding: "1px",
                backgroundColor: "rgb(79 79 138)",
                width: "180px",
                marginTop: "10px",
                marginBottom:"20px"
              }}
            />
          </center>
          <Grid container sx={{ padding: { lg: "30px" } }} spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <center>
                <CardMedia
                  component="img"
                  src="../images/crcs.png"
                  sx={{
                    width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                    marginTop: { lg: "200px", xs: "0px", md: "200px" },
                    height: "35vh",
                    objectFit: "contain",
                  }}
                  alt="Company Registration"
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
                <h2 style={{ color: "#2E3B55" }}>Our Services</h2>
                <p>
                  We offer a comprehensive suite of services to assist with company registration and compliance, ensuring that your business operates smoothly and adheres to all legal requirements. Here's how we can help:
                </p>
                <h3 style={{ color: "#4A90E2" }}>Efficient Registration Process</h3>
                <p>
                  Our streamlined registration process simplifies the establishment of your company, from initial paperwork to final approval.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Regulatory Compliance</h3>
                <p>
                  We help ensure that your business complies with all relevant regulations and standards, including tax filings, annual reports, and more.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Expert Guidance</h3>
                <p>
                  Our team of experts provides personalized guidance and support, helping you navigate complex compliance requirements and regulatory changes.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Data Security and Confidentiality</h3>
                <p>
                  We prioritize the protection of your sensitive business information, ensuring that all data is securely stored and handled in compliance with data protection laws.
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
                <h2 style={{ color: "#2E3B55" }}>Benefits of Our Services</h2>
                <h3 style={{ color: "#4A90E2" }}>Streamlined Processes</h3>
                <p>
                  Our services simplify the registration and compliance process, saving you time and reducing administrative burdens.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Expertise and Experience</h3>
                <p>
                  Benefit from our extensive experience in company registration and compliance, ensuring that all aspects of your business are managed professionally.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Ongoing Support</h3>
                <p>
                  We offer continuous support to address any compliance issues and provide updates on regulatory changes that may impact your business.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Customized Solutions</h3>
                <p>
                  Our services are tailored to meet the specific needs of your business, ensuring that you receive solutions that align with your goals and industry requirements.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <center>
                <CardMedia
                  component="img"
                  src="../images/crcs1.png"
                  sx={{
                    width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                    marginTop: { lg: "200px", xs: "0px", md: "200px" },
                    height: "35vh",
                    objectFit: "contain",
                  }}
                  alt="Compliance"
                />
              </center>
            </Grid>
          </Grid>
        </Box>
  
        <Footer />
      </Box>
    );
  };
  