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
  
  export const Samp = () => {
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
          <title>Lyss Technology Pvt. Ltd. | SAMP</title>
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
              <p style={{ fontSize: "2.6rem" }} id="hero" className="header">
                SAMP
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
                Empowering Aspiring Entrepreneurs with Knowledge and Guidance
              </Typography>
              <Button variant='contained' id='button' sx={{width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                      padding: "10px",
                      borderRadius: "25px",
                      marginTop:"20px",
                      backgroundColor: "#5656b9",}} onClick={(e)=>window.location.href="/underdevelopment"}>Visit Now</Button>
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
            The Startup Awareness and Mentorship Program (SAMP) is designed to
            empower aspiring entrepreneurs with the knowledge, skills, and
            guidance needed to transform innovative ideas into successful
            startups. SAMP aims to bridge the gap between
            theoretical learning and practical application, ensuring participants
            are well-prepared to navigate the startup ecosystem. SAMP comes under CSR activities.
          </Typography>
          <center>
          <p style={{ fontSize: "1.5rem",fontWeight:"600" }}>Key Features Of The Program</p>
          </center>
          <center>
            <Divider
              style={{
                padding: "1px",
                backgroundColor: "rgb(79 79 138)",
                width: "180px",
                marginTop: "5px",
                marginBottom:"20px"
              }}
            />
          </center>
          <Grid container sx={{ padding: { lg: "30px" } }} spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <center>
                {" "}
                <CardMedia
                  component="img"
                  src="../images/samp1.png"
                  sx={{
                    width: { lg: "40vw", xs: "90vw", md: "40vw", sm: "90vw" },
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
                <h2 style={{ color: "#2E3B55" }}>Learn with SAMP</h2>
                <p>
                  SAMP simplifies the process of enrolling in mentorship programs
                  and awareness sessions, ensuring aspiring entrepreneurs can
                  easily access the necessary resources to start their ventures.
                  Here's how it works:
                </p>
                <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
                <p>
                  Our intuitive interface guides users through the enrollment
                  process, making it accessible for all participants.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Efficient Program Management</h3>
                <p>
                  Our platform ensures that mentorship programs are managed
                  promptly by our team. SAMP streamlines the workflow, reducing
                  manual intervention and speeding up the mentorship delivery
                  process.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Secure and Confidential</h3>
                <p>
                  SAMP prioritizes the security and confidentiality of participant
                  information. All data entered into the platform is encrypted and
                  securely stored, ensuring privacy and compliance with
                  institutional policies.
                </p>
                <h3 style={{ color: "#4A90E2" }}>Help and Support</h3>
                <p>
                  Our dedicated support team is available to assist participants
                  with any questions or issues during the enrollment process.
                  Comprehensive FAQs and guides are also accessible within the
                  platform for additional support.
                </p>
                <p>
                  With SAMP, enrolling in mentorship programs and awareness
                  sessions is a hassle-free experience, allowing participants to
                  focus on their entrepreneurial goals without unnecessary delays
                  or complications.
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
                <h2 style={{ color: "#2E3B55" }}>Benefits of SAMP</h2>
                <h3 style={{ color: "#4A90E2" }}>Structured Learning</h3>
                <p>
                  SAMP offers a structured curriculum designed by industry
                  experts, covering essential topics such as business planning,
                  market analysis, funding strategies, and more.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Networking Opportunities</h3>
                <p>
                  Participants gain access to a vast network of successful
                  entrepreneurs, investors, and industry professionals, fostering
                  valuable connections and mentorship opportunities.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Practical Experience</h3>
                <p>
                  SAMP emphasizes practical learning through hands-on projects,
                  case studies, and real-world scenarios, enabling participants to
                  apply their knowledge effectively.
                </p>
  
                <h3 style={{ color: "#4A90E2" }}>Customized Guidance</h3>
                <p>
                  Each participant receives personalized mentorship and guidance
                  tailored to their specific business ideas and goals, ensuring
                  maximum growth and success.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <center>
                {" "}
                <CardMedia
                  component="img"
                  src="../images/samp2.png"
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
        </Box>
  
        <Footer />
      </Box>
    );
  };
  