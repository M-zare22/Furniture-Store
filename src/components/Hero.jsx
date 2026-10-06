import { Box, Button, Typography } from '@mui/material';

export default function Hero({ onBrowse }) {
  return (
    <Box component="section" aria-labelledby="hero-title" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, bgcolor: '#efeee6', borderRadius: 3, overflow: 'hidden' }}>
      <Box sx={{ p: { xs: 3, sm: 5, md: 6 }, alignSelf: 'center' }}>
        <Typography sx={{ color: '#766a4c', fontSize: 13, mb: 2 }}>مجموعهٔ خانهٔ آرام / ۰۱</Typography>
        <Typography id="hero-title" variant="h1" sx={{ fontSize: { xs: '2.25rem', sm: '3rem', lg: '3.4rem' } }}>خانه،<br />به سلیقهٔ شما.</Typography>
        <Typography color="text.secondary" sx={{ mt: 2, mb: 3, maxWidth: 350 }}>زیبایی در سادگی‌ست. مجموعه‌ای از وسایل کاربردی و ماندگار برای گوشه‌های دوست‌داشتنی خانه.</Typography>
        <Button variant="contained" onClick={onBrowse}>کشف محصولات <span aria-hidden="true" style={{ marginInlineStart: 16 }}>←</span></Button>
      </Box>
      <Box component="img" src="/images/room.svg" alt="تصویرسازی فضایی آرام با صندلی سبز، چراغ و میز چوبی" sx={{ width: '100%', height: '100%', minHeight: { xs: 280, md: 450 }, objectFit: 'cover' }} />
    </Box>
  );
}
