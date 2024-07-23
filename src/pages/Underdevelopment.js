import { Box, Typography } from "@mui/material";
import { FaSpinner } from "react-icons/fa"; // For a spinner icon
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const UnderDevelopment = () => {
  return (
    <Box>
         <Navbar/>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
       
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: '20px',
          color: '#555',
          fontWeight: 'bold',
          fontSize:{lg:"2.3rem",xs:"1.6rem",sm:"2.3rem",md:"2.3rem"}
        }}
      >
        Under Development
      </Typography>
      <FaSpinner
        style={{
          fontSize: '3rem',
          color: '#007bff',
          animation: 'spin 1s linear infinite',
        }}
      />
      <Typography
        variant="body1"
        component="p"
        sx={{
          marginTop: '20px',
          color: '#777',
        }}
      >
        We're working hard to get this page up and running. Stay tuned!
      </Typography>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
     
    </Box>
    <Footer/>
    </Box>
  );
};
