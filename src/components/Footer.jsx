import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function Footer({ onNavigate }) {
  return (
    <Box component="footer" sx={{ bgcolor: '#edf0e8', mt: 8, py: { xs: 4, md: 5 } }}>
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', gap: 3 }}>
          <Box>
            <Typography sx={{ fontSize: 28, fontWeight: 800, mb: 1 }}>میترا.</Typography>
            <Typography color="text.secondary" variant="body2">انتخاب‌های کوچک برای حال بهتر خانه.</Typography>
          </Box>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <Button onClick={() => onNavigate('home')}>خانه</Button>
            <Button onClick={() => onNavigate('products')}>محصولات</Button>
          </Stack>
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', borderTop: '1px solid', borderColor: 'divider', mt: 4, pt: 2 }}>
          فروشگاه نمایشی میترا — محصولات و قیمت‌ها نمونه هستند؛ خرید فعال نیست.
        </Typography>
      </Container>
    </Box>
  );
}
