import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'We5 Mobility Solution Pvt. Ltd.',
      period: 'Feb 2021 – July 2021',
      project: 'Supermonk.store - Grocery Shopping Web Application',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      achievements: [
        'Collaborated with a team of 4 developers to build and optimize web components, improving development efficiency by 30%',
        'Designed and implemented a responsive UI, ensuring a smooth user experience across mobile and desktop devices',
        'Optimized page load time by 20% through efficient code implementation and asset optimization',
        'Managed and enhanced grocery item data, including product details, pricing, and categorization',
      ],
    },
  ];

  return (
    <Box
      id="experience"
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
            Experience
          </Typography>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00eaff88' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  elevation={0}
                  sx={{
                    p: 4,
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
                  <Typography variant="h5" color="primary" gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" paragraph>
                    Project: {exp.project}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {exp.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  <List>
                    {exp.achievements.map((achievement, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <WorkIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={achievement} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 