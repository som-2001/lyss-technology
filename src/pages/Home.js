import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import "../App.css";
import SliderContent from "../components/SliderContent";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ClientSlider from "../components/ClientSlider";
import { IoMdArrowRoundUp } from "react-icons/io";
import { CustomerSlider } from "../components/CustomerSlider";
import "../App.css";
import { Helmet } from "react-helmet";
import { TypedComponent } from "../components/TypedComponent";
import { ReactChatBot } from "../components/ReactChatBot";
import { BsRobot } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);
  const scrollRef7 = useRef(null);
  const scrollRef9 = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bot,setBot]=useState(false);

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
          y: 100,
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
        "#text001",
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#text001",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef4 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#domainText",
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#domainText",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef7 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text002",
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#text002",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef5 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text004",
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#text004",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef6 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text009",
        {
          opacity: 0,
          y: 50,
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: "#text009",
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: scrollRef9 }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "#text003",
        {
          opacity: 0,
          y: 50,
        },
        {
          y: 0,
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
          y: 100,
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
      "#button",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.4,
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

  function valuetext(value) {
    return `${value}°C`;
  }

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
        <title>Lyss Technology Pvt. Ltd. | Home</title>
      </Helmet>
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

       {bot && <ReactChatBot/>}
       
       <Button
          id="button"
          title="Lyss Technology Bot"
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: "10",
            fontSize: "1.5rem",
            backgroundColor: "#7a7ad4",
            borderRadius: "59px",
          }}

          onClick={(e) => {
           setBot(!bot);
          }}
        >
          <BsRobot style={{ color: "white" }} />
        </Button>
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
              <p
                style={{ fontSize: "2.3rem", fontWeight: "600" }}
                className="header"
              >
                Lyss Technology
              </p>
              <p
                style={{
                  marginTop: "-28px",
                  fontSize: "1.0rem",
                  fontWeight: "600",
                }}
                className="header"
              >
                A Hybrid(Product+Service) Based Company{" "}
              </p>
              <Typography
                variant="span"
                color="text.secondary"
                style={{ fontSize: "1.2rem" }}
              >
                At LYSS Technology, we actively find existing social problems
                either by itself or by communicating with different classes of
                people.
                <br />{" "}
                <Typography
                  variant="span"
                  color="color.secondary"
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "block",
                      xs: "none",
                    },
                    fontSize: "1.7rem",
                    marginTop: "10px",
                  }}
                >
                  <TypedComponent />
                </Typography>{" "}
                <Typography
                  variant="span"
                  color="color.secondary"
                  sx={{
                    display: {
                      lg: "none",
                      md: "none",
                      sm: "none",
                      xs: "block",
                    },
                    position: "absolute",
                    fontSize: "1.7rem",
                    marginTop: "10px",
                  }}
                >
                  <TypedComponent />
                </Typography>{" "}
              </Typography>

              <CardMedia
                component="img"
                src="./images/picture1.png"
                alt=""
                id="hero1"
                sx={{ width: "340px", marginTop: {xs:"30px",lg:"-10px",sm:"-10px",md:"-10px"}}}
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
          style={{
            fontSize: "2.3rem",
            fontWeight: "600",
            color: "rgb(79 79 138)",
          }}
          ref={scrollRef1}
          id="text00"
        >
          Our Domains
        </p>
        <Grid container>
          <Grid item lg={5} xs={12} sm={12} md={12}>
            <Typography
              variant="h2"
              id="domainText"
              ref={scrollRef7}
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
              <SliderContent />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "3rem",
          backgroundColor: "white",
          marginBottom: "5rem",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginTop: "50px" }}>
            <Typography
              variant="p"
              component="div"
              sx={{
                color: "blue",
                fontSize: "1.2rem",
                textAlign: {
                  lg: "start",
                  md: "start",
                  xs: "center",
                  sm: "center",
                },
                marginLeft: { lg: "100px", xs: "0px", sm: "0px", md: "50px" },
              }}
            >
              ABOUT OUR COMPANY
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{
                fontSize: { lg: "2.7rem", xs: "1.9rem" },
                fontWeight: "700",
                textAlign: {
                  lg: "start",
                  md: "start",
                  xs: "center",
                  sm: "center",
                },
                marginLeft: { lg: "100px", xs: "0px", md: "50px", sm: "0px" },
                marginTop: "10px",
              }}
              className="header"
            >
              Where Technology Meets Passion
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "400",
                marginLeft: { lg: "92px", xs: "0px", md: "50px", sm: "0px" },
                marginTop: "20px",
                padding: "5px",
              }}
            >
              We are committed to providing transparent and quality services to
              businesses of all scales.
            </Typography>

            <Box
              sx={{
                padding: { lg: "100px", xs: "20px" },
                marginTop: { lg: "-20px", xs: "0px" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  Believing in your success
                </p>
                <p style={{ marginTop: "30px", fontWeight: "700" }}>90%</p>
              </Box>
              <center>
                <Slider
                  disabled
                  aria-label="Temperature"
                  defaultValue={90}
                  getAriaValueText={valuetext}
                  sx={{
                    "& .MuiSlider-thumb": {
                      color: "blue",
                    },
                    "& .MuiSlider-track": {
                      color: "blue",
                    },
                    "& .MuiSlider-rail": {
                      color: "blue",
                    },
                  }}
                />
              </center>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  Custom Solutions
                </p>
                <p style={{ marginTop: "30px", fontWeight: "700" }}>75%</p>
              </Box>
              <center>
                <Slider
                  aria-label="Temperature"
                  defaultValue={75}
                  disabled
                  getAriaValueText={valuetext}
                  sx={{
                    "& .MuiSlider-thumb": {
                      color: "blue",
                    },
                    "& .MuiSlider-track": {
                      color: "blue",
                    },
                    "& .MuiSlider-rail": {
                      color: "blue",
                    },
                  }}
                />
              </center>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  Customer Support
                </p>
                <p style={{ marginTop: "30px", fontWeight: "700" }}>85%</p>
              </Box>
              <center>
                <Slider
                  aria-label="Temperature"
                  defaultValue={85}
                  disabled
                  getAriaValueText={valuetext}
                  sx={{
                    "& .MuiSlider-thumb": {
                      color: "blue",
                    },
                    "& .MuiSlider-track": {
                      color: "blue",
                    },
                    "& .MuiSlider-rail": {
                      color: "blue",
                    },
                  }}
                />
              </center>
              <center>
                <Button
                  variant="contained"
                  id="button"
                  sx={{
                    width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
                    padding: "10px",
                    borderRadius: "25px",
                    backgroundColor: "#5656b9",
                    marginTop: "20px",
                  }}
                  onClick={(e) => (window.location.href = "/about")}
                >
                  Learn More
                </Button>
              </center>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <center>
              <CardMedia
                component="img"
                src="./images/intro.jpg"
                alt="Web Design & Development"
                sx={{
                  width: { lg: "40vw", xs: "95vw", md: "45vw", sm: "60vw" },
                  height: "auto",
                  marginTop: { lg: "90px", xs: "10px", md: "90px", sm: "10px" },
                  marginBottom: {
                    lg: "100px",
                    xs: "50px",
                    md: "50px",
                    sm: "50px",
                  },
                }}
              />
            </center>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ width: "100vw", textAlign: "center", marginTop: "0rem" }}
        className="header"
      >
        <CardMedia
          component="img"
          src="./images/picture2.png"
          alt="Web Design & Development"
          sx={{ width: "100vw", height: "auto" }}
        />
        <Typography
          variant="h4"
          id="text003"
          ref={scrollRef3}
          sx={{
            fontSize: { xs: "15.4pt", lg: "30pt", sm: "23pt", md: "26pt" },
            fontWeight: "600",
            position: "relative",
            top: { lg: "-120px", xs: "0px", sm: "0px", md: "-120px" },
            left: { lg: "460px", xs: "0px", sm: "0px", md: "-260px" },
          }}
        >
          Top-Notch Product Plus
          <br />
          {"  "}Service Based Company
        </Typography>

        <Box>
          <Typography
            variant="h5"
            id="text009"
            ref={scrollRef9}
            sx={{
              fontSize: { xs: "15.4pt", lg: "30pt", sm: "23pt", md: "30pt" },
              fontWeight: "600",
              position: "relative",
              top: { lg: "-620px", xs: "-250px", sm: "-395px", md: "-500px" },
              left: { lg: "-360px", xs: "0px", sm: "0px", md: "-100px" },
            }}
            className="header"
          >
            We offer efficient and
            <br />
            well-functioning technology
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center" }} className="header">
        <p
          style={{ fontSize: "2.6rem", fontWeight: "600", marginTop: "-10px" }}
        >
          Our Clients
        </p>
        <Box ref={scrollRef2} id="text01" sx={{ marginTop: "60px" }}>
          <CustomerSlider />
        </Box>
      </Box>

      <Box
        sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}
        className="header"
      >
        <p
          style={{
            fontSize: "2.6rem",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          Clients Testimonials
        </p>

        <Box ref={scrollRef2} id="text01">
          <ClientSlider />
        </Box>
      </Box>

      <Box
        sx={{
          padding: { xs: "3%", lg: "7%", md: "7%", sm: "10%" },
          fontSize: { xs: "20.4pt", lg: "20pt", sm: "23pt", md: "26pt" },
          fontWeight: "900",
          display: { xs: "none", lg: "block", md: "block", sm: "block" },
        }}
      >
        <p
          style={{ color: "blue", textAlign: "center", fontSize: "1.2rem" }}
          id="text001"
          ref={scrollRef4}
        >
          WANT TO WORK WITH US?
        </p>
        <p
          style={{ fontSize: "2.5rem", textAlign: "center" }}
          id="text002"
          ref={scrollRef5}
          className="header"
        >
          Curious to Know How We Transform
          <br /> Businesses?
        </p>
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", lineClamp: 2 }}
          id="text004"
          ref={scrollRef6}
        >
          Our team of designers, and developers are always there to provide you
          with the best-in-class services. Further, we also have the best
          project managers who are very cooperative and hear your needs before
          getting oto work with the project.
        </p>

        <center>
          <Button
            variant="contained"
            id="button"
            sx={{
              width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
              padding: "10px",
              borderRadius: "25px",
              backgroundColor: "#5656b9",
              marginTop: "60px",
            }}
            onClick={(e) => (window.location.href = "/contact")}
          >
            Let's Connect
          </Button>
        </center>
      </Box>

      <Box
        sx={{
          display: { xs: "block", lg: "none", md: "none", sm: "none" },
          marginTop: "50px",
        }}
      >
        <p style={{ color: "blue", textAlign: "center",fontSize:"1.5rem" }}>
          WANT TO WORK WITH US?
        </p>

        <p style={{ textAlign: "center" }}>"Transforming businesses with innovative design, development, and dedicated project management."</p>

        <center>
          <Button
            variant="contained"
            id="button"
            sx={{
              width: { lg: "30%", md: "40%", xs: "55%", sm: "40%" },
              padding: "10px",
              borderRadius: "25px",
              backgroundColor: "#5656b9",
              marginTop: "20px",
            }}
            onClick={(e) => (window.location.href = "/contact")}
          >
            Let's Connect
          </Button>
        </center>
      </Box>

      <Footer />
    </Box>
  );
};
