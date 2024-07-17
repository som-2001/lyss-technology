import { Box, Button, Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import AboutSlider from "../components/AboutSlider";
import { CustomerSlider } from "../components/CustomerSlider";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        "https://media.licdn.com/dms/image/D4D12AQEQS7imGyPM9A/article-cover_image-shrink_600_2000/0/1688547852720?e=2147483647&v=beta&t=2m3uyCC6cv_mjLJZ0vIaM6i73K69W3KDNMAJLzsaOko",
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
          paddingTop: "12vw",
          paddingBottom:"10vw"
        }}
      >
          {scrollPosition>150 && 
      <Button sx={{
        position:"fixed",
        bottom:"20px",
        right:"10px",
        zIndex:'10',
        fontSize:"1.5rem"
      }}
      onClick={(e)=>{
       window.scrollTo({
        top:"0px",
        behavior:'smooth'
       })
      }}
      ><IoMdArrowRoundUp/>
      </Button>
      }
        <Grid container>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <p style={{ fontSize: "3.9rem", }} id="hero">About us</p>
            <p style={{ paddingBottom: "20px", fontSize: "1.2rem",marginLeft:"20px",fontWeight:"500" }} id="hero1">
              We are a team of passionate individuals working towards adding
              value to your life and business endeavors. Since the inception of
              Lyss Technology pvt. ltd. , we have been the reliable spot for our clients
              in terms of their needs.
            </p>
          </Grid>
          <center> 
          <Grid item xs={12} sm={12} lg={6} md={6}>
           <img src="./images/aboutPic.png" alt="" id="hero2"/>
          </Grid>
          </center>
        </Grid>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
            <p style={{fontSize:"3.4rem"}}>Our Culture</p>
        <AboutSlider/>
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
        <span style={{ color: "blue", fontSize: "1.2rem" }}>
          5 STEP WORK PROCESS
        </span>
        <br />
        <p style={{ fontSize: "3rem", marginTop: "15px" }}>Working Process</p>
        <center>
          <Grid container rowGap={2}>
            {item.map((data, index) => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <AboutCards item={data} key={index} />
              </Grid>
            ))}

          </Grid>
        </center>
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
      <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>Our Clients</p>
      <Box id="text01">
        <CustomerSlider />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
