import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
const Link: any = ScrollLink;

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Publications', to: 'publications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        // @ts-ignore
        <Link
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          duration={500}
          onClick={handleDrawerToggle}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" elevation={0} sx={{
      bgcolor: 'rgba(10,25,47,0.45)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      boxShadow: '0 4px 32px 0 #00eaff44',
      borderRadius: 3,
      border: '1.5px solid rgba(255,255,255,0.18)',
      mx: { xs: 0, md: 2 },
      mt: { xs: 0, md: 2 },
      left: 0,
      right: 0,
      top: 0,
      zIndex: 1200,
    }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00eaff 0%, #64ffda 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '1.3rem', md: '1.7rem' },
            letterSpacing: 2,
          }}
        >
          AK
        </Typography>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              // @ts-ignore
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 2,
                    borderRadius: 2,
                    transition: 'color 0.3s, transform 0.2s',
                    '&:hover': {
                      color: '#00eaff',
                      transform: 'scale(1.08)',
                      background: 'rgba(0,234,255,0.08)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(10,25,47,0.85)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1.5px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 32px 0 #00eaff44',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 