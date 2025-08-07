import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'Create Blog', path: '/create' },
    { label: 'Contact', path: '/contact' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(to right, #0f172a, #1e293b)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 1400,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo / Title */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: '1.8rem',
              background: 'linear-gradient(90deg, #8fb7c7ff, #f1d245ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              animation: 'fadeIn 1s ease-in-out',
            }}
          >
            <TravelExploreIcon sx={{ fontSize: 28, color: '#38bdf8' }} />
            WanderTales
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: '#f1f5f9',
                  fontWeight: '500',
                  '&:hover': {
                    color: '#38bdf8',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            edge="end"
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#f1f5f9' }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
  anchor="top"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  PaperProps={{
    sx: {
      width: 'calc(100% - 16px)', // leave space on the left (adjust 16px as needed)
      backgroundColor: '#0c1f3eff',
      borderRadius: 0,
      marginTop: '64px', // aligns with AppBar height
      boxShadow: 'none',
      mx: 'auto', // centers the drawer
      marginRight: '8px', // adds space on the right (optional)
    },
  }}
  ModalProps={{
    keepMounted: true,
  }}
>

  <List sx={{ px: 2 }}> {/* Adds internal padding to match nav content */}
    {navItems.map((item) => (
      <ListItem
        key={item.label}
        button
        component={Link}
        to={item.path}
        onClick={toggleDrawer(false)}
        sx={{
          color: '#f1f5f9',
          borderRadius: 1,
          '&:hover': {
            backgroundColor: '#334155',
          },
        }}
      >
        <ListItemText primary={item.label} />
      </ListItem>
    ))}
  </List>
</Drawer>

    </>
  );
}

export default Navbar;
