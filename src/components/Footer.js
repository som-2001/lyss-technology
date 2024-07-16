import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  padding: '40px 0px 30px 0px',
  backgroundColor: '#f8f9fa',
  marginTop:"50px"
});

const FooterGrid = styled(Grid)({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const FooterLink = styled(Link)({
  marginRight: '20px',
  color: '#6c757d',
  textDecoration: 'none',
  '&:hover': {
    color: '#007bff',
    textDecorationStyle:"none"
  },
});

const Footer = () => {
  return (
    <FooterContainer >
      <Container>
        <FooterGrid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              Address
            </Typography>
            <Typography variant="body1" color="textSecondary">
              3/365, Aryan Bhawan<br />
              Lakho Binda Campus, Santunagar,<br />
              Madhubani (Bihar)-India<br />
              Pin-847211
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              Quick Links
            </Typography>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Feedback</FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              Social Links
            </Typography>
            <Typography variant="body1" color="textSecondary">
            <FooterLink href="mailto:contact2atplc@gmail.com">contact2atplc@gmail.com</FooterLink><br/>
              
              <a href='tel:+91 6205695667' style={{ textDecoration: 'none',textDecorationStyle:"none",color:"#6c757d"}}>+91 6205695667</a>
            </Typography>
            <FooterLink href="#">GitHub</FooterLink><br/>
            <FooterLink href="https://www.linkedin.com/company/lyss-technology/?originalSubdomain=in">LinkedIn</FooterLink><br/>
            <FooterLink href="#">Telegram</FooterLink><br/>
            <FooterLink href="#">Facebook</FooterLink><br/>
            <FooterLink href="#">YouTube</FooterLink><br/>
          </Grid>
        </FooterGrid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
