import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
      sx={{ py: 8, bgcolor: 'transparent', position: 'relative', overflow: 'hidden' }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00eaff88' }}
                transition={{ type: 'spring', stiffness: 300 }}
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'rgba(10,25,47,0.45)',
                  color: '#e3f6ff',
                  borderRadius: 3,
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 4px 32px 0 #00eaff44',
                  backdropFilter: 'blur(18px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                  transition: 'transform 0.2s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 #00eaff88',
                  },
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Professional Summary
                </Typography>
                <Typography variant="body1" paragraph>
                  I am a B.Tech graduate in Information Technology with a strong focus on Frontend Development
                  and Cybersecurity. My journey in technology has been marked by significant achievements,
                  including the development of an innovative Yoga Pose Detector using TensorFlow and OpenCV,
                  which achieved a remarkable 90% pose recognition accuracy.
                </Typography>
                <Typography variant="body1" paragraph>
                  My expertise spans across modern web technologies including React.js, JavaScript (ES6+),
                  HTML5, CSS3, and Python. I have a keen eye for UI/UX design, demonstrated through my
                  proficiency in Figma and experience in creating intuitive user interfaces.
                </Typography>
                <Typography variant="body1">
                  I am passionate about creating accessible, performant, and user-friendly web applications
                  that solve real-world problems. My experience in both development and cybersecurity gives
                  me a unique perspective on building secure and robust applications.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00eaff88' }}
                transition={{ type: 'spring', stiffness: 300 }}
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'rgba(10,25,47,0.45)',
                  color: '#e3f6ff',
                  borderRadius: 3,
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 4px 32px 0 #00eaff44',
                  backdropFilter: 'blur(18px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                  transition: 'transform 0.2s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 #00eaff88',
                  },
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Education & Achievements
                </Typography>
                <Typography variant="body1" paragraph>
                  • B.Tech in Information Technology from MIT Academy of Engineering, Pune (2019-2023)
                </Typography>
                <Typography variant="body1" paragraph>
                  • Published research paper at Sixth International Conference on AI and Soft Computing (AISC 2022)
                </Typography>
                <Typography variant="body1" paragraph>
                  • Multiple cloud certifications including:
                  - AWS Academy Graduate – Cloud Architecting
                  - Oracle Cloud Infrastructure Foundations 2021 Certified Associate
                  - Oracle Cloud Data Management 2023 Certified Foundations Associate
                </Typography>
                <Typography variant="body1">
                  • NPTEL Cloud Computing Certification from IIT Kharagpur
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 