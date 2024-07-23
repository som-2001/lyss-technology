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

export const Atplc = () => {
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
        <title>Lyss Technology Pvt. Ltd. | SmartOne</title>
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
            <p style={{ fontSize: "3.9rem" }} id="hero" className="header">
              ATPLC
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
              Empowering Tech Students Beyond the Classroom
            </Typography>
            <Button variant='contained' id='button' sx={{width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                    padding: "10px",
                    borderRadius: "25px",
                    marginTop:"10px",
                    backgroundColor: "#5656b9",}} onClick={(e)=>window.location.href="https://www.atplc.in"}>Visit Now</Button>
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
          ATPLC is a club to enhance practical learning among tech-students in
          their field of interest.Initiated in 2020, this club aim at enhancing
          and motivating students to learn proper stack of skills apart from
          semester syllabus to become professionally fit.
        </Typography>
        <center>
        <p style={{ fontSize: "1.5rem",fontWeight:"600" }}>Key Features Of The App </p>
        </center>
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
        <Grid container sx={{ padding: { lg: "30px" } }} spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <center>
              {" "}
              <CardMedia
                component="img"
                src="../images/smartOne3.png"
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
              <h2 style={{ color: "#2E3B55" }}>Train yourself with ATPLC</h2>
              <p>
                ATPLC simplifies the process of enrolling in training courses,
                ensuring students can easily access the necessary resources for
                various learning purposes. Here's how it works:
              </p>
              <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
              <p>
                Our intuitive interface guides students through the enrollment
                process, making it accessible for all users.
              </p>

              <h3 style={{ color: "#4A90E2" }}>Efficient Course Management</h3>
              <p>
                Our platform ensures that courses are managed promptly by the
                training staff. ATPLC streamlines the workflow, reducing manual
                intervention and speeding up the course delivery process.
              </p>

              <h3 style={{ color: "#4A90E2" }}>Secure and Confidential</h3>
              <p>
                ATPLC prioritizes the security and confidentiality of student
                information. All data entered into the platform is encrypted and
                securely stored, ensuring privacy and compliance with
                institutional policies.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Help and Support</h3>
              <p>
                Our dedicated support team is available to assist students with
                any questions or issues during the enrollment process.
                Comprehensive FAQs and guides are also accessible within the
                platform for additional support.
              </p>
              <p>
                With SmartOne, enrolling in training courses is a hassle-free
                experience, allowing students to focus on their learning goals
                without unnecessary delays or complications.
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
              <h2 style={{ color: "#2E3B55" }}>Courses</h2>
              Sure, here’s a rewritten version that conveys the same information
              in a more narrative style: ATPLC is your gateway to enhancing your
              skills and knowledge through a variety of specialized courses.
              With our user-friendly interface, enrolling in any of our courses
              is a seamless experience. Simply log in to your ATPLC account,
              navigate to the 'Training Courses' section, and fill out a
              straightforward online form with essential details like your name,
              enrollment number, chosen course, and preferred training schedule.
              Once you've reviewed your information for accuracy, submit your
              application and get ready to embark on your learning journey. Our
              platform keeps you updated every step of the way. You'll receive
              real-time notifications on the status of your enrollment, from
              confirmation to course completion. This ensures you're always
              informed and can plan your learning activities effectively.
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <center>
              {" "}
              <CardMedia
                component="img"
                src="../images/smartOne5.png"
                sx={{
                  width: { lg: "30vw", xs: "90vw", md: "40vw", sm: "90vw" },
                  marginTop: { lg: "60px", xs: "0px", md: "120px" },
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
                src="../images/smartOne4.png"
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
                Responsive & Interactive Dashboard
              </h2>
              <p>
                Our dashboard simplifies the management of your activities,
                providing a seamless and efficient user experience. Here's how
                it works:
              </p>
              <h3 style={{ color: "#4A90E2" }}>User-Friendly Interface</h3>
              <p>
                Our intuitive interface allows users to navigate through various
                functionalities effortlessly, making it accessible for all
                users.
              </p>
            
              <h3 style={{ color: "#4A90E2" }}>Real-Time Data Visualization</h3>
              <p>
                The dashboard provides real-time data visualization, allowing
                users to see up-to-date information and trends. This feature
                helps in making informed decisions quickly and effectively.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Efficient Task Management</h3>
              <p>
                Our platform streamlines task management by allowing users to
                create, assign, and track tasks efficiently. The interactive
                elements make it easy to update task statuses and collaborate
                with team members.
              </p>
              
              <h3 style={{ color: "#4A90E2" }}>Data Security</h3>
              <p>
                We prioritize the security and confidentiality of your data. All
                information is encrypted and securely stored, ensuring privacy
                and compliance with institutional policies.
              </p>
              <h3 style={{ color: "#4A90E2" }}>Help & Support</h3>
              <p>
                Our dedicated support team is available to assist with any
                questions or issues you might encounter while using the
                dashboard. Comprehensive FAQs and guides are also available
                within the platform for additional support.
              </p>
              <p>
                With our responsive and interactive dashboard, managing your
                activities is a hassle-free experience, allowing you to focus on
                your goals without unnecessary delays or complications.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};
