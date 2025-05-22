import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3/SASS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Backend & Cloud',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'AWS Cloud', level: 75 },
        { name: 'REST API', level: 80 },
        { name: 'Git', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'WordPress', level: 70 },
        { name: 'Webpack', level: 75 },
      ],
    },
  ];

  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00eaff88' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  elevation={0}
                  sx={{
                    p: 3,
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
                  <Typography
                    variant="h6"
                    color="primary"
                    gutterBottom
                    sx={{ mb: 3 }}
                  >
                    {category.title}
                  </Typography>
                  {category.skills.map((skill, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" color="text.primary">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'background.default',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 