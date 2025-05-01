import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
      >
        Smart Photo Gallery - Built by 나종춘 | Contact:{' '}
        <Link
          href="mailto:najongchoon@gmail.com"
          color="inherit"
          underline="hover"
        >
          najongchoon@gmail.com
        </Link>
      </Typography>
    </Box>
  );
} 