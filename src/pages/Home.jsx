// src/pages/HomePage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const featuredCategories = [
  { image: '/images/travel1.jpg', title: 'Destinations' },
  { image: '/images/travel2.jpg', title: 'Travel Photography' },
  { image: '/images/travel3.jpg', title: 'Personal Stories' },
  { image: '/images/card3.jpg', title: 'Culture' },
];

const testimonials = [
  {
    quote: "WanderTales helped me discover my dream destination!",
    author: "Priya from India",
    avatar: '/images/avatar1.jpg',
  },
  {
    quote: "The stories here are so inspiring. I planned my trip to Peru based on one.",
    author: "Lucas from Brazil",
    avatar: '/images/avatar2.jpg',
  },
  {
    quote: "I love sharing my travel photography here!",
    author: "Ella from France",
    avatar: '/images/avatar3.jpg',
  },
];

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url("/images/Topbanner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Discover the World with WanderTales
          </Typography>
          <Typography variant="h6" mb={4}>
            Find hidden gems. Share your stories. Inspire others.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="success" size="large" component={RouterLink} to="/login">
              Login / Signup
            </Button>
          </Box>
        </Box>
      </Box>

       {/* Featured Categories */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Featured Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuredCategories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cat.image}
                  alt={cat.title}
                  sx={{
                    width: 200,
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={600}>
                    {cat.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
<Box
  sx={{
    py: 10,
    background: 'linear-gradient(to bottom, #f8fafc, #e0e7ff)',
  }}
>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      textAlign="center"
      mb={8}
      fontWeight="bold"
      sx={{
        color: '#1e40af',
        fontSize: { xs: '1.8rem', md: '2.25rem' },
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '100px',
          height: '4px',
          backgroundColor: '#6366f1',
          margin: '1.5rem auto 0',
          borderRadius: '2px'
        }
      }}
    >
      Traveler Experiences
    </Typography>

    <Slider {...sliderSettings}>
      {testimonials.map((item, idx) => (
        <Box key={idx} px={1.5} sx={{ height: '100%' }}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: 'white',
              borderRadius: 3,
              boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.2)'
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                mb: 3,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.07)'
                }
              }}
            >
              <Avatar
                src={item.avatar}
                alt={item.author}
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid rgba(99, 102, 241, 0.5)'
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'rgba(99, 102, 241, 0.7)',
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  position: 'relative',
                  top: '0.5rem'
                }}
              >
                ❝
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  maxWidth: '400px',
                  mb: 2,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  px: 2
                }}
              >
                {item.quote}
              </Typography>
            </Box>

            <Box sx={{ mt: 'auto' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: '#1e40af',
                  letterSpacing: '0.5px'
                }}
              >
                {item.author}
              </Typography>
            </Box>
          </Paper>
        </Box>
      ))}
    </Slider>
  </Container>
</Box>



      {/* Footer */}
      <Box
        sx={{
          py: 4,
          backgroundColor: '#0f172a',
          color: '#f1f5f9',
          textAlign: 'center',
          borderTop: '1px solid #334155',
        }}
      >
        <Typography variant="body1">&copy; 2025 WanderTales. All rights reserved.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <MuiLink href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Privacy
          </MuiLink>
          |
          <MuiLink href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Terms
          </MuiLink>
          |
          <MuiLink href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Contact
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
