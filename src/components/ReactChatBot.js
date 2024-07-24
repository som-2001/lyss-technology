import { Box,Button } from '@mui/material';
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


// Custom component for handling navigation
const CustomButton = ({ goTo }) => {
  

  return (
    <Button variant='contained' sx={{borderRadius:"20px",backgroundColor:"whitesmoke",color:"black"}} id='Button' onClick={() =>  window.location.href = `${goTo}`}>
      Visit Now
    </Button>
  );
};

const CustomButton1 = ({ goTo }) => {
  

  return (
    <Button variant='contained' sx={{borderRadius:"20px",width:"fit-content",backgroundColor:"whitesmoke",color:"black"}} id='Button' onClick={() =>  window.location.href = `${goTo}`}>
      Visit Now
    </Button>
  );
};
const steps = [
  {
    id: '1',
    message: 'Hello! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'Our products', label: 'Learn about our products', trigger: 'products' },
      { value: 'domains', label: 'Learn about our domains', trigger: 'domains' },
      { value: 'services', label: 'Learn about our services', trigger: 'services' },
      { value: 'contact', label: 'Contact us', trigger: 'contact' },
      { value: 'about', label: 'About us', trigger: 'about' },
      { value: 'gallery', label: 'Gallery', trigger: 'gallery' },
      { value: 'home', label: 'Home', trigger: 'home' },
    ],
  },
  {
    id: 'products',
    message: 'We offer several products including ATPLC, SmartOne, Startup Awareness and Mentorship Program (SAMP), and Company Registration and Compliances Services (CRCS). Would you like to know more about a specific product?',
    component: <CustomButton goTo="/product" />,
    trigger: 'products-details',
  },
  {
    id: 'products-details',
    options: [
      { value: 'atplc', label: 'ATPLC', trigger: 'atplc' },
      { value: 'smartone', label: 'SmartOne', trigger: 'smartone' },
      { value: 'samp', label: 'SAMP', trigger: 'samp' },
      { value: 'crcs', label: 'CRCS', trigger: 'crcs' },
    ],
  },
  {
    id: 'atplc',
    message: 'ATPLC is a club to enhance practical learning among tech-students in their field of interest.Initiated in 2020, this club aim at enhancing and motivating students to learn proper stack of skills apart from semester syllabus to become professionally fit.',
    trigger: 'atplc-button',
  },
  {
    id:'atplc-button',
    component: <CustomButton1 goTo="https://www.atplc.in" />,
    trigger: 'more-help',
  },
  {
    id: 'smartone',
    message: 'SmartOne is an online platform designed to revolutionize the campus experience with advanced technology and seamless connectivity.Our solution ensures that students and staff stay connected and engaged like never before.',
    trigger: 'more-help',
  },
  {
    id: 'samp',
    message: 'Startup Awareness and Mentorship Program (SAMP) – your gateway to entrepreneurial success. SAMP is designed to equip aspiring entrepreneurs with the knowledge, skills, and guidance needed to turn innovative ideas into thriving businesses. Our program offers comprehensive awareness sessions on startup essentials.',
    trigger: 'more-help',
  },
  {
    id: 'crcs',
    message: 'Company registration and compliances services (CRCS) specialize in providing comprehensive company registration and compliance services. Our expert team is dedicated to simplifying the business setup process for you, ensuring that all legal and regulatory requirements are met efficiently.',
    trigger: 'more-help',
  },
  {
    id: 'domains',
    message: 'Our domains include training & internships, hardware & software development, company registration, and company compliance support. Would you like more details on any of these domains?',
    trigger: 'domains-details',
  },
  {
    id: 'domains-details',
    options: [
      { value: 'training', label: 'Training & Internships', trigger: 'training' },
      { value: 'hardware-software', label: 'Hardware & Software Development', trigger: 'hardware-software' },
      { value: 'registration', label: 'Company Registration', trigger: 'registration' },
      { value: 'compliance', label: 'Company Compliance Support', trigger: 'compliance' },
    ],
  },
  {
    id: 'training',
    message: 'We offer comprehensive training and internship programs in various fields.',
    trigger: 'more-help',
  },
  {
    id: 'hardware-software',
    message: 'We provide hardware and software development services tailored to your needs.',
    trigger: 'more-help',
  },
  {
    id: 'registration',
    message: 'We assist with all aspects of company registration.',
    trigger: 'more-help',
  },
  {
    id: 'compliance',
    message: 'We offer support for maintaining company compliance with legal and regulatory requirements.',
    trigger: 'more-help',
  },
  {
    id: 'services',
    message: 'Our services include training & internships, hardware & software development, company registration, and company compliance support. Would you like to know more about a specific service?',
    trigger: 'services-details',
  },
  {
    id: 'services-details',
    options: [
      { value: 'training-service', label: 'Training & Internships', trigger: 'training-service' },
      { value: 'hardware-software-service', label: 'Hardware & Software Development', trigger: 'hardware-software-service' },
      { value: 'registration-service', label: 'Company Registration', trigger: 'registration-service' },
      { value: 'compliance-service', label: 'Company Compliance Support', trigger: 'compliance-service' },
    ],
  },
  {
    id: 'training-service',
    message: 'Our training and internship services are designed to provide hands-on experience and industry knowledge.',
    trigger: 'more-help',
  },
  {
    id: 'hardware-software-service',
    message: 'Our hardware and software development services include custom solutions to meet your business needs.',
    trigger: 'more-help',
  },
  {
    id: 'registration-service',
    message: 'Our company registration services ensure a smooth and efficient registration process.',
    trigger: 'more-help',
  },
  {
    id: 'compliance-service',
    message: 'Our company compliance support services help you stay compliant with all necessary regulations.',
    trigger: 'more-help',
  },
  {
    id: 'contact',
    message: 'You can contact us via email at contact2atplc@gmail.com or call us at +91 6205695667.',
    trigger: 'contact-button',
  },
  {
    id: 'contact-button',
    component: <CustomButton goTo="/contact" />,
    asMessage: true,
    trigger: 'more-help',
  },
  {
    id: 'about',
    message: 'Learn more about us on our About  page.',
    trigger: 'about-button',
  },
  {
    id: 'about-button',
    component: <CustomButton goTo="/about" />,
    asMessage: true,
    trigger: 'more-help',
  },
  {
    id: 'gallery',
    message: 'Check out our gallery on the Gallery page.',
    trigger: 'gallery-button',
    
  },
  {
    id: 'gallery-button',
    component: <CustomButton goTo="/gallary" />,
    asMessage: true,
    trigger: 'more-help',
  },
  {
    id: 'home',
    message: 'You can return to the Home page anytime.',
    trigger: 'home-button',
  },
  {
    id: 'home-button',
    component: <CustomButton goTo="/" />,
    asMessage: true,
    trigger: 'more-help',
  },
  {
    id: 'more-help',
    message: 'Is there anything else I can assist you with?',
    trigger: 'options',
  },
];

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#007bff',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#007bff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export const ReactChatBot=()=> {
  return (
    <Box sx={{position:"fixed", bottom: "60px",
      left: "10px",
      zIndex: "10000",
      fontSize: "1.5rem",
      backgroundColor: "#7a7ad4",
      borderRadius: "9px",
      width:"300px"
      }}>
    <ThemeProvider theme={theme} >
      <div className="App">
        <ChatBot
          steps={steps}
          
          headerTitle="Lyss Technology Bot" // Optional: Add a custom title
        />
      </div>
    </ThemeProvider>
    </Box>
  );
}

