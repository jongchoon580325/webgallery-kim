import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import FireworksEffect from '@/effects/FireworksEffect';
import HomeIcon from '@mui/icons-material/Home';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
              }
            }}
          >
            Smart Gallery
          </Typography>
        </Link>
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <Link href="/" passHref>
            <FireworksEffect
              particleCount={30}
              duration={1500}
              triggerOnHover={true}
              triggerOnClick={false}
              particleSize={4}
              spread={120}
            >
              <Button 
                color="inherit"
                size="large"
                disableRipple
                sx={{ 
                  fontSize: '1.2rem',
                  fontWeight: pathname === '/' ? 'bold' : 'normal',
                  color: pathname === '/' ? '#eb4034' : 'inherit',
                  '&:hover': {
                    background: 'transparent'
                  }
                }}
              >
                {isMobile ? <HomeIcon /> : '홈'}
              </Button>
            </FireworksEffect>
          </Link>
          <Link href="/gallery" passHref>
            <FireworksEffect
              particleCount={30}
              duration={1500}
              triggerOnHover={true}
              triggerOnClick={false}
              particleSize={4}
              spread={120}
            >
              <Button 
                color="inherit"
                size="large"
                disableRipple
                sx={{ 
                  fontSize: '1.2rem',
                  fontWeight: pathname === '/gallery' ? 'bold' : 'normal',
                  color: pathname === '/gallery' ? '#eb4034' : 'inherit',
                  '&:hover': {
                    background: 'transparent'
                  }
                }}
              >
                {isMobile ? <PhotoLibraryIcon /> : '갤러리'}
              </Button>
            </FireworksEffect>
          </Link>
          <Link href="/management" passHref>
            <FireworksEffect
              particleCount={30}
              duration={1500}
              triggerOnHover={true}
              triggerOnClick={false}
              particleSize={4}
              spread={120}
            >
              <Button 
                color="inherit"
                size="large"
                disableRipple
                sx={{ 
                  fontSize: '1.2rem',
                  fontWeight: pathname === '/management' ? 'bold' : 'normal',
                  color: pathname === '/management' ? '#eb4034' : 'inherit',
                  '&:hover': {
                    background: 'transparent'
                  }
                }}
              >
                {isMobile ? <SettingsIcon /> : '관리'}
              </Button>
            </FireworksEffect>
          </Link>
        </Box>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 