import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';

const Publications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: 'Blockchain Encryption using Biometric Authentication',
      conference: 'Sixth International Conference on AI and Soft Computing (AISC 2022)',
      description:
        'Research paper exploring the integration of blockchain technology with biometric authentication systems for enhanced security and privacy.',
      link: '#',
    },
  ];

  return (
    <Box
      id="publications"
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
            Publications
          </Typography>
          <Grid container spacing={4}>
            {publications.map((pub, index) => (
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
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    transition: 'transform 0.2s, box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 8px 32px 0 #00eaff88',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <ArticleIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {pub.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {pub.conference}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {pub.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Read Paper
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Publications; 