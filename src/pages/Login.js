import { Box, Button, CardMedia, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../App.css'

gsap.registerPlugin(ScrollTrigger);

export const Login = () => {

  const [hide,setHide]=useState(false);
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
        delay: 1.4,
      }
    );
  }, []);
 
  useGSAP(() => {
    gsap.fromTo(
      "#hero3",
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.6,
      }
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#hero4",
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
        delay: 2.0,
      }
    );
  }, []);
  return (
    <Box style={{backgroundColor:"white"}}>
      <Navbar />
      <Box>
      <CardMedia 
      id="hero"
              component="img"
              src="https://blog.ahgora.com/wp-content/uploads/2020/04/Como-fazer-a-gestao-do-trabalho-home-office-de-um-modo-eficaz.jpg"
              alt="Logo"
              sx={{ display:{lg:"none",xs:"none",sm:"block",md:"none"},width: {lg:"20%",md:"15%",xs:"100%",sm:"100%"},  }}
            />
      </Box>
      <Grid container spacing={4} sx={{ height: "100vh", alignItems: "center" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          sx={{ display: { xs: "none", md: "block" }, mt: { md: "1.2%" }}}
        >
       
          <img
            src="https://blog.ahgora.com/wp-content/uploads/2020/04/Como-fazer-a-gestao-do-trabalho-home-office-de-um-modo-eficaz.jpg"
            alt="Registration"
            style={{ width: "110%", height: "100vh" ,objectFit:"cover"}}
          />
         
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 3, md: "5%" },
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <CardMedia
            id="hero"
              component="img"
              src="../images/logo.jpg"
              alt="Logo"
              sx={{ width: {lg:"20%",md:"15%",xs:"35%",sm:"15%"}, height: "auto", marginBottom: "20px",marginTop:{lg:"0%",md:"0%",sm:"0%",xs:"10%"} }}
            />
            <Typography variant="body2" align="center" sx={{ mb: 1,fontSize:"1.8rem"}} id="hero1" className="header">
              Welcome to Lyss Technology
            </Typography>
            <center><Typography id="hero2" variant="span" sx={{fontWeight:"600"}} className="header">A hybrid(Product+Service) based company</Typography></center>
            <Box sx={{width:{lg:"70%",md:"70%",sm:"70%",xs:"95%"}}}>
          

            <Box sx={{ mb: 2, width: '100%',marginTop:"40px" }}  id="hero3">
              <TextField
                type="text"
                label="Email"
               
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CgProfile />
                      </InputAdornment>
                    ),
                  }}
                placeholder="Email..."
                fullWidth
                variant="outlined"
              />
            </Box> 
           
            <Box sx={{ mb: 2, width: '100%' }}  id="hero4">
           
              <TextField
             
                type="password"
                label="Password"
                placeholder="Password..."
                fullWidth
                variant="outlined"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <RiLockPasswordFill />
                      </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                          {hide ? <FaEyeSlash className='cursor-pointer' onClick={(e)=>
                            setHide(!hide)
                          }/>:<FaEye className='cursor-pointer' onClick={(e)=>
                            setHide(!hide)
                          }/>}
                        </InputAdornment>
                      ),
                }}
              />
            </Box>
            <center><Button id="button" variant="contained" sx={{ width: '40%',borderRadius:"20px",backgroundColor:"#5656b9" }}>
              Login
            </Button></center>
            </Box>
          </Box>
          
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
