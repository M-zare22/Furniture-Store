import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StoreLayout({ currentPage, onNavigate, children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <Box component="main" id="main-content" tabIndex={-1} sx={{ flex: 1 }}>{children}</Box>
      <Footer onNavigate={onNavigate} />
    </Box>
  );
}
