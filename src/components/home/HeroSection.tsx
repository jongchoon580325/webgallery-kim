import React, { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FireworksEffect, { FireworksEffectRef } from '../../effects/FireworksEffect';

interface HeroSectionProps {
  scrollY: number;
  animationType?: 'fadeIn' | 'slideUp';
}

export default function HeroSection({ scrollY, animationType = 'fadeIn' }: HeroSectionProps) {
  const fireworksRef = useRef<FireworksEffectRef>(null);

  const handleTitleAnimationComplete = () => {
    if (fireworksRef.current) {
      fireworksRef.current.triggerFireworks();
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #1a237e, #0d47a1)',
        overflow: 'hidden',
      }}
    >
      {/* What a wonderful world 텍스트 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: 'rgba(255, 255, 255, 0.85)',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          What a wonderful world is! Praise God!
        </Typography>
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <FireworksEffect
          ref={fireworksRef}
          particleCount={40}
          duration={2000}
          triggerOnHover={false}
          triggerOnClick={false}
        >
          <Typography
            variant="h1"
            className={`animate-${animationType}`}
            onAnimationEnd={handleTitleAnimationComplete}
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 3
            }}
          >
            Smart Photo Gallery
          </Typography>
        </FireworksEffect>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            소중한 매순간을 더욱 아름답게 보관하고 간직하세요
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box
            sx={{
              width: '60%',
              mx: 'auto',
              my: 3,
              borderBottom: '2px dotted rgba(192, 192, 192, 0.6)',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              letterSpacing: '0.05em',
            }}
          >
            &ldquo;In the beginning God created the heaven and the earth (Gen 1:1)&rdquo;
          </Typography>
        </motion.div>
      </Container>

      {/* Since 2025 ~  텍스트 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '0.1em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontStyle: 'italic',
          }}
        >
          {`Since 1957 ~ ${new Date().getFullYear()}`}
        </Typography>
      </motion.div>
    </Box>
  );
} 