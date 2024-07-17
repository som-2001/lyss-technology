import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import "../App.css";
import Slider from "../components/Slider";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ClientSlider from "../components/ClientSlider";
import { IoMdArrowRoundUp } from "react-icons/io";
import { CustomerSlider } from "../components/CustomerSlider";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const navigate=useNavigate();
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
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

  useGSAP(
    () => {
      gsap.fromTo(
        "#text00",
        {
          opacity: 0,
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#text00",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef1 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text003",
        {
          opacity: 0,
        },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: "#text003",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef3 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text01",
        {
          opacity: 0,
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#text01",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef2 }
  );

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
        delay: 1.5,
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
        delay: 1.8,
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
        delay: 2.2,
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
      {scrollPosition > 150 && (
        <Button
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "10px",
            zIndex: "10",
            fontSize: "1.5rem",
          }}
          onClick={(e) => {
            window.scrollTo({
              top: "0px",
              behavior: "smooth",
            });
          }}
        >
          <IoMdArrowRoundUp />
        </Button>
      )}
      <Navbar />
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <Grid
          container
          sx={{
            backgroundImage: "url(./images/banner.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: "4.3vw",
            height: "100%",
          }}
        >
          <Grid
            item
            lg={3}
            id="hero"
            sx={{
              textAlign: "end",
              display: {
                lg: "block",
                xs: "none",
                sm: "none",
                md: "none",
              },
            }}
          >
            <img
              src="https://www.atplc.in/Assets/Illustrator/female.png"
              alt=""
              style={{
                marginLeft: "188px",
              }}
              id="hero"
            />
          </Grid>
          <Grid item lg={6} md={12} xs={12} sm={12} id="hero1">
            <center>
              <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>
                Lyss Technology
              </p>
              <p
                style={{
                  marginTop: "-18px",
                  fontSize: "1.0rem",
                  fontWeight: "600",
                }}
              >
                A hybrid(Product+Service) based company{" "}
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                At LYSS Technology, we actively find existing social problems
                either by itself or by communicating with different classes of
                people,
                <br />{" "}
                <Typography
                  variant="body2"
                  color="color.secondary"
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    },
                    fontSize: "1.2rem",
                  }}
                >
                  do market research and based on that we discuss and plan to
                  develop products for that problems.
                </Typography>{" "}
              </p>

              <img
                src="./images/picture1.png"
                alt=""
                id="hero1"
                style={{ width: "340px", marginTop: "-30px" }}
              />
            </center>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              display: {
                lg: "block",
                xs: "none",
                sm: "none",
                md: "none",
              },
              position: "relative",
              left: "30px",
            }}
          >
            <img
              src="https://www.atplc.in/Assets/Illustrator/male.png"
              alt=""
              id="hero2"
              style={{
                marginRight: "150px",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "7rem" }}>
        <p
          style={{ fontSize: "2.3rem", fontWeight: "600" }}
          ref={scrollRef1}
          id="text00"
        >
          Our Domains
        </p>
        <Grid container>
          <Grid item lg={5} xs={12} sm={12} md={12}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: {
                  lg: "1.4rem",
                  xs: "1.0rem",
                  sm: "1.0rem",
                  md: "1.2rem",
                },
                fontWeight: "500",

                margin: {
                  lg: "130px 0px 20px 30px",
                  xs: "30px 0px 20px 0px",
                  md: "30px 0px 0px 0px",
                  sm: "30px 0px 0px 0px",
                },
                padding: "10px",
              }}
            >
              Our domain encompasses a diverse range of services designed to
              cater to the evolving needs of businesses and individuals in
              today's dynamic environment. Here’s an overview of what we offer:
            </Typography>
          </Grid>
          <Grid
            item
            lg={7}
            sm={12}
            xs={12}
            md={12}
            sx={{
              marginTop: { xs: "20px", md: "20px", sm: "20px", lg: "0px" },
            }}
          >
            <Box ref={scrollRef1} id="text00">
              <Slider />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "0rem" }}>
        <CardMedia
          component="img"
          src="./images/picture2.png"
          alt="Web Design & Development"
          sx={{ width: "100vw", height: "auto" }}
        />
        <Typography
          variant="span"
          id="text003"
          ref={scrollRef3}
          sx={{
            fontSize: { xs: "20.4pt", lg: "30pt", sm: "23pt", md: "26pt" },
            fontWeight: "900",
            position: "relative",
            top: { lg: "-120px", xs: "0px", sm: "0px", md: "-120px" },
            left: { lg: "-360px", xs: "0px", sm: "0px", md: "-260px" },
          }}
        >
          Top-Notch Product Plus
          <br />
          Service Based Company
        </Typography>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center" }}>
        <p style={{ fontSize: "2.3rem", fontWeight: "600", marginTop: "70px" }}>
          Our Clients
        </p>
        <Box ref={scrollRef2} id="text01" sx={{ marginTop: "60px" }}>
          <CustomerSlider />
        </Box>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
        <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>
          Clients Testimonials
        </p>

        <Box ref={scrollRef2} id="text01">
          <ClientSlider />
        </Box>
      </Box>

      <Box sx={{padding:{xs:"3%",lg:"10%",md:"10%",sm:"10%"}, 
            fontSize: { xs: "20.4pt", lg: "20pt", sm: "23pt", md: "26pt" },
            fontWeight: "900",
           
          }}>
      <p style={{color:"blue",textAlign:'center',fontSize:"1.2rem"}}>WANT TO WORK WITH US?</p>
        <p style={{fontSize:"2.5rem",textAlign:'center'}}>Curious to Know How We Transform<br/> Businesses?</p>
        <p style={{textAlign:"center",fontSize:"1.2rem",lineClamp:2}}>Our
        team of designers, and  developers are always there to
        provide you with the best-in-class services. Further, we also have the
        best project managers who are very cooperative and hear your needs
        before getting oto work with the project.
        </p>

        <center>
              <Button
                variant="contained"
                id="button"
                sx={{
                  width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                  padding:"10px",
                  borderRadius:"25px",
                  backgroundColor:"#5656b9",
                  marginTop:"60px"
                }}
                onClick={(e)=>window.location.href='/contact'}
              >
                Let's Connect
              </Button>
            </center>
      </Box>

      <Footer />
    </Box>
  );
};
