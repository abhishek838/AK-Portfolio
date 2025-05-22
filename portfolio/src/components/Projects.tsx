import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Yoga Pose Detector',
      description:
        'An innovative application that uses computer vision and machine learning to detect and analyze yoga poses in real-time. The system provides instant feedback on pose accuracy and helps users improve their yoga practice.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      achievements: [
        'Developed a dataset of 1,000+ yoga poses and fine-tuned deep learning models',
        'Achieved 90% pose detection accuracy',
        'Implemented real-time pose detection using OpenCV',
        'Integrated TensorFlow PoseNet model for precise movement tracking',
        'Built an intuitive dashboard with visual pose correction insights',
      ],
      github: 'https://github.com/abhishek838',
      demo: '#',
    },
  ];

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00eaff88' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{
                    bgcolor: 'rgba(10,25,47,0.45)',
                    color: '#e3f6ff',
                    borderRadius: 3,
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 4px 32px 0 #00eaff44',
                    backdropFilter: 'blur(18px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                    transition: 'transform 0.2s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 32px 0 #00eaff88',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{ bgcolor: 'primary.main', color: 'white' }}
                        />
                      ))}
                    </Stack>
                    <Typography variant="subtitle2" color="text.primary" gutterBottom>
                      Key Achievements:
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>
                          <Typography variant="body2" color="text.secondary">
                            {achievement}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 