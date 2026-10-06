import { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(page) {
    setMenuOpen(false);
    onNavigate(page);
  }

  const links = (
    <>
      <Button onClick={() => navigate('home')} aria-current={currentPage === 'home' ? 'page' : undefined}>خانه</Button>
      <Button onClick={() => navigate('products')} aria-current={currentPage === 'products' ? 'page' : undefined}>همهٔ محصولات</Button>
    </>
  );

  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', py: 0.8, px: 2 }}>
        <Typography variant="caption">اشیای ساده، حس خوبِ خانه</Typography>
      </Box>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 76, md: 88 }, gap: 3 }}>
            <Button onClick={() => navigate('home')} aria-label="میترا، صفحهٔ خانه" sx={{ px: 0, minWidth: 80 }}>
              <Typography component="span" sx={{ fontSize: 32, fontWeight: 800 }}>میترا<span style={{ color: '#b1784c' }}>.</span></Typography>
            </Button>
            <Box component="nav" aria-label="منوی اصلی" sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, flex: 1 }}>{links}</Box>
            <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>برای خانه‌ای که شبیه شماست</Typography>
            <IconButton aria-label="باز کردن منو" aria-expanded={menuOpen} aria-controls={menuOpen ? 'mobile-menu' : undefined} onClick={() => setMenuOpen(true)} sx={{ display: { sm: 'none' }, ml: 'auto' }}>
              <Box component="span" aria-hidden="true" sx={{ fontSize: 25 }}>☰</Box>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box id="mobile-menu" sx={{ width: 280, p: 3 }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h3">میترا</Typography>
            <IconButton aria-label="بستن منو" onClick={() => setMenuOpen(false)}>×</IconButton>
          </Stack>
          <Stack component="nav" aria-label="منوی موبایل" spacing={1}>{links}</Stack>
        </Box>
      </Drawer>
    </>
  );
}
