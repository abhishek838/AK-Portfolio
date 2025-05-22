import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Award-Winning Project',
    description: 'Recognized for innovative solutions in web development and cybersecurity.',
  },
  {
    title: 'Open Source Contributor',
    description: 'Actively contribute to open source projects and communities.',
  },
  {
    title: 'Tech Speaker',
    description: 'Delivered talks at tech conferences and meetups on modern web technologies.',
  },
];

const neonGlow = {
  boxShadow: '0 4px 32px 0 #00eaff44',
  border: '1.5px solid rgba(255,255,255,0.18)',
  background: 'rgba(10,25,47,0.45)',
  backdropFilter: 'blur(18px) saturate(180%)',
  WebkitBackdropFilter: 'blur(18px) saturate(180%)',
  borderRadius: '18px',
  color: '#e3f6ff',
};

const Highlights: React.FC = () => (
  <Box id="highlights" sx={{ py: 8, bgcolor: 'transparent', position: 'relative', overflow: 'hidden' }}>
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h2"
          sx={{ mb: 4, color: 'primary.main', textAlign: 'center', letterSpacing: 2 }}
        >
          Highlights
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {highlights.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.05, boxShadow: '0 0 32px 8px #64ffda, 0 0 64px 16px #00eaff' }}
                transition={{ type: 'spring', stiffness: 300 }}
                elevation={6}
                sx={{ p: 4, textAlign: 'center', ...neonGlow }}
              >
                <Typography variant="h5" color="primary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Highlights; 