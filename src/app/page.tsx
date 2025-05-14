'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, LinearProgress, Fab, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import FeatureCard from '@/components/home/FeatureCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [animationType, setAnimationType] = useState<'fadeIn' | 'slideUp'>('fadeIn');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 저장된 애니메이션 설정 불러오기
  useEffect(() => {
    const savedAnimation = localStorage.getItem('homeTextAnimation') as 'fadeIn' | 'slideUp';
    if (savedAnimation) {
      setAnimationType(savedAnimation);
    }
  }, []);

  const features = [
    {
      title: '고품질 이미지 최적화',
      description: '자동 이미지 최적화로 빠른 로딩과 선명한 화질을 동시에 제공합니다.',
      icon: '🖼️',
    },
    {
      title: '스마트 갤러리 관리',
      description: '직관적인 인터페이스로 사진을 쉽게 관리하고 정리할 수 있습니다.',
      icon: '📱',
    },
    {
      title: '고급 검색 기능',
      description: '태그, 위치, 날짜 등 다양한 기준으로 사진을 빠르게 찾을 수 있습니다.',
      icon: '🔍',
    },
  ];

  // 업로드 시뮬레이션 함수
  const handleUpload = () => {
    setUploading(true);
    setProgress(0);
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 20 + 10; // 10~30%씩 증가
      if (value >= 100) {
        value = 100;
        setProgress(value);
        clearInterval(interval);
        setTimeout(() => setUploading(false), 500); // 잠시 후 프로그레스 바 숨김
      } else {
        setProgress(value);
      }
    }, 300);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <HeroSection scrollY={scrollY} animationType={animationType} />
      
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 500,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 8,
            // 반응형 폰트 크기 설정
            // xs: 모바일(600px 이하), sm: 태블릿(600px 이상), md: 데스크탑(900px 이상)
            fontSize: {
              xs: '2rem', // 모바일: 작은 화면에서 더 작은 폰트, 기본 1.2rem
              sm: '2rem', // 태블릿: 중간 크기 화면, 기본 1.5rem
              md: '2rem',   // 데스크탑: 넓은 화면에서 크게
            },
          }}
        >
          특별한 순간을 더욱 특별하게
        </Typography>

        <Grid container spacing={4} component={motion.div} layout>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index} component={motion.div} layout transition={{ type: 'spring', stiffness: 300, damping: 30 }} whileHover={{ y: -12, boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)' }}>
              <Box>
                <FeatureCard {...feature} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, flexDirection: 'column', alignItems: 'center' }}>
          {/* 업로드 프로그레스 바 */}
          {uploading && (
            <Box sx={{ width: '100%', mb: 2 }}>
              <LinearProgress variant="determinate" value={progress} />
              <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 1 }}>{Math.round(progress)}%</Typography>
            </Box>
          )}
          <Link href="/gallery" passHref>
            <Button
              variant="contained"
              size="large"
              className="firework-button"
              sx={{
                fontSize: '1.2rem',
                py: 2,
                px: 6,
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
              }}
              onClick={handleUpload}
              disabled={uploading}
            >
              갤러리 둘러보기
            </Button>
          </Link>
        </Box>
      </Container>

      {/* 위로가기 버튼 */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          onClick={handleScrollTop}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1200,
            boxShadow: 3,
          }}
          aria-label="위로가기"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}
