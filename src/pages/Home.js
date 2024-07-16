import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import "../App.css";
import Slider from "../components/Slider";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


export const Home = () => {

    useGSAP(() => {

        gsap.fromTo("#hero", {
            opacity: 0,
            y: -50
        }, {
            opacity: 1,
            y: 0,
            delay: 0.5
        })
    
    }, [])
    
  return (
    <Box
      style={{
        overflowX: "hidden",
        backgroundColor: "whitesmoke",
        color: "#000",
        fontFamily: "math",
      }}
    >
      <Navbar />
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }} id="hero">
        <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>Lyss Technology</p>
        <p
          style={{ marginTop: "-18px", fontSize: "1.0rem", fontWeight: "600" }}
        >
          A hybrid(Product+Service) based company{" "}
        </p>
        <p>
          At LYSS Technology, we actively find existing social problems either
          by itself or by communicating with different classes of people,
          <br />{" "}
          <Typography
            variant="body2"
            color="color.secondary"
            sx={{
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
          >
            do market research and based on that we discuss and plan to develop
            products for that problems.
          </Typography>{" "}
        </p>

        <img src="./images/picture1.jpg" alt="" style={{ width: "280px" }} />
      </Box>
      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
        <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>Our Domains</p>
        
        <Slider/>
      </Box>

      <Box sx={{ width: "100vw", textAlign: "center", marginTop: "100px" }}>
        <p style={{ fontSize: "2.3rem", fontWeight: "600" }}>Our Clients</p>
        
        <Slider/>
      </Box>

      <Footer />
    </Box>
  );
};
