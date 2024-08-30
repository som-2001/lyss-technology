import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import AboutSlider from "../components/AboutSlider";
import { CustomerSlider } from "../components/CustomerSlider";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import KeyPersonal from "../components/KeyPersonal";
import OurTeam from "../components/ourTeam";
import { Helmet } from "react-helmet";
import { TagLine } from "../components/TagLine";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);

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

  const item = [
    {
      image:
        "https://st2.depositphotos.com/5240153/44928/v/450/depositphotos_449286268-stock-illustration-business-requirements-analysis-team-working.jpg",
      title: "Requirement gathering",
      body: "The initial step is to gather the needs and expectations of the client regarding the project.",
    },
    {
      image:
        "https://i.pinimg.com/736x/41/ff/04/41ff047cf03d29ae603fe2e53bfe2454.jpg",
      title: "Design & Development",
      body: "This is the step where we plan, and start the design process followed by the development of the project.",
    },
    {
      image:
        "https://assets.justinmind.com/wp-content/uploads/2019/12/get-team-onboard-user-testing.png",
      title: "Testing",
      body: "After we have developed the product, this is the time to test various aspects and features of it.",
    },
    {
      image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
      title: "Project Delivery",
      body: "We understand how it feels to convince clients of delays. Hence, we never miss the deadline.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1164543414/vector/man-with-laptop-studying-or-working-concept-table-with-books-lamp-coffee-cup-vector.jpg?s=612x612&w=0&k=20&c=RhRRSp2Tt4sczkqldICH775gdOpEdwmj5NP0yBLDtYM=",
      title: "Support",
      body: "You can expect uninterrupted support from us in case of any queries, bugs, and errors with projects.",
    },
  ];
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
        <title>Lyss Technology Pvt. Ltd. | About</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "50px",
          backgroundImage: "url(./images/about.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
            <p style={{ fontSize: "3.9rem" }} id="hero" className="header">
              About us
            </p>
            <center>
         
        </center>
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
              }}
              color="text.secondary"
              id="hero1"
            >
              We are a team of passionate individuals working towards adding
              value to your life and business endeavors. Since the inception of
              Lyss Technology pvt. ltd. , we have been the reliable spot for our
              clients in terms of their needs.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "2.5rem", marginTop: "20px" }} className="header">
          Our Culture
        </p>
       
        <AboutSlider />
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <span style={{ color: "blue", fontSize: "1.2rem" }}>
          5 STEPS WORK PROCESS
        </span>
        <br />
        <p
          style={{
            fontSize: "2.5rem",
            marginTop: "25px",
            marginBottom: "10px",
          }}
          className="header"
        >
          Working Process
        </p>
        <center>
          <Grid container rowGap={2}>
            {item.map((data, index) => (
              <Grid item xs={12} sm={12} md={6} lg={4} sx={{ padding: "10px" }}>
                <AboutCards item={data} key={index} />
              </Grid>
            ))}
          </Grid>
        </center>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
        <p style={{ fontSize: "1.7rem", fontWeight: "500", color: "#5e5eee" }}>
          Team
        </p>
        <Typography
          variant="h2"
          style={{
            fontSize: "2.3rem",
            fontWeight: "500",
            marginBottom: "30px",
          }}
          className="header"
        >
          Our Leadership & Key Personnel
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: { lg: "block", md: "block", sm: "block", xs: "none" },
            fontSize: "1.3rem",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          <TagLine />
        </Typography>

        <KeyPersonal />
      </Box>

      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "100px",
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
        }}
      >
        <Grid container>
          <Grid
            item
            lg={5}
            sm={12}
            xs={12}
            md={6}
            sx={{
              marginTop: { xs: "20px", md: "20px", sm: "20px", lg: "0px" },
            }}
          >
            <OurTeam />
          </Grid>

          <Grid item lg={7} xs={12} sm={12} md={6}>
            <Typography
              variant="h2"
              id="domainText"
              // ref={scrollRef7}
              className="header"
              sx={{
                fontSize: {
                  lg: "2.4rem",
                  xs: "1.0rem",
                  sm: "1.0rem",
                  md: "1.9rem",
                },
                fontWeight: "500",

                margin: {
                  lg: "130px 0px 20px 30px",
                  xs: "30px 0px 20px 0px",
                  md: "190px 0px 0px 0px",
                  sm: "30px 0px 0px 0px",
                },
                padding: "10px",
              }}
            >
              Our Development Team
              <br />
              <span style={{ fontSize: "1.1rem", color: "black" }}>
                "Empowering Progress through Technology."
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100vw",
          textAlign: "center",
          marginTop: "20px",
          display: { lg: "none", md: "none", sm: "block", xs: "block" },
        }}
      >
        <Grid container>
          <Grid item lg={5} xs={12} sm={12} md={12}>
            <Typography
              variant="h2"
              id="domainText"
              // ref={scrollRef7}

              sx={{
                fontSize: {
                  lg: "2.4rem",
                  xs: "2.3rem",
                  sm: "2.3rem",
                  md: "1.9rem",
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
              className="header"
            >
              Our Development Team
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
            <OurTeam />
          </Grid>
        </Grid>
      </Box>

     

      <Box
        sx={{
          background: "linear-gradient(to left, #8181ed, whitesmoke)",
          padding: { lg: "20px", xs: "10px" },
          marginTop: "30px",
        }}
      >
        <p
          style={{ fontWeight: "600", fontSize: "2.6rem", textAlign: "center" }}
        >
          Why US ??
        </p>
        <Grid container>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <center>
              <CardMedia
                component="img"
                src="../images/meeting.jpg"
                alt=""
                sx={{
                  width: { lg: "42vw", xs: "90vw", md: "40vw", sm: "60vw" },
                  marginTop: "5%",
                  borderRadius: "20px",
                }}
              />
            </center>
          </Grid>

          <Grid item lg={6} md={6} xs={12} sm={12} sx={{ marginTop: "-2%" }}>
            <Box sx={{padding:"20px"}}>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              <strong>Unmatched Quality and Innovation</strong>
            </p>
            <p style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                lineHeight: "1.3",
                marginBottom: "1rem",
              }}>
              At Lyss Technology Pvt. Ltd., we pride ourselves on delivering
              products and services that set industry standards. Our commitment
              to quality ensures that every product you receive is meticulously
              crafted, rigorously tested, and built to exceed your expectations.
              We are dedicated to innovation, continuously integrating
              cutting-edge technology and creative solutions to meet the
              evolving needs of our customers.
            </p>

            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              <strong>Comprehensive Solutions</strong>
              </p>
              <p style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                lineHeight: "1.3",
                marginBottom: "1rem",
              }}>
              We understand that your needs are unique, and a one-size-fits-all
              approach doesn't work. That's why we offer comprehensive solutions
              that combine top-tier products with personalized services. Our
              team works closely with you to understand your specific
              requirements, tailoring our offerings to provide the perfect fit
              for your business or personal needs.
            </p>

            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              <strong>Customer-Centric Approach</strong>
              </p>
              <p style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                lineHeight: "1.3",
                marginBottom: "1rem",
              }}>
              Your satisfaction is our priority. We believe in building
              long-term relationships with our customers, based on trust,
              transparency, and exceptional service. Our customer support team
              is always ready to assist you, ensuring that your experience with
              us is seamless and enjoyable from start to finish.
            </p>

           
            </Box>
            
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
        <p style={{ fontSize: "2.3rem", fontWeight: "600" }} className="header">
          Our Clients
        </p>
        <Box id="text01">
          <CustomerSlider />
        </Box>
      </Box>

      <Box
        sx={{
          padding: { xs: "3%", lg: "10%", md: "10%", sm: "10%" },
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
        <p style={{ color: "blue", textAlign: "center" }}>
          WANT TO WORK WITH US?
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
