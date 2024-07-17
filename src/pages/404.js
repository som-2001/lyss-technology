import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Error=()=>{
    return (
        <Box className="fullArea">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="83vh"
            textAlign="center"
            position="relative"
            zIndex={9}
          >
            <img src='./images/404.png' alt='' style={{width:"300px",marginTop:"50px"}}/>
            <Typography variant="h4" component="h1" gutterBottom>
              Page Not Found
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Oops! The page you're looking for doesn't exist.
            </Typography>
            <Link to="/">
              <Typography variant="h6" component="p" color="primary">
                Go back to Home
              </Typography>
            </Link>
          </Box>
          <Footer />
        
        </Box>
      );
}