import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: '#294d3e', contrastText: '#ffffff' },
    background: { default: '#fcfbf8', paper: '#ffffff' },
    text: { primary: '#253c32', secondary: '#686d65' },
    divider: '#e4e6de',
  },
  typography: {
    fontFamily: 'Tahoma, Arial, sans-serif',
    h1: { fontSize: '3.4rem', fontWeight: 700, lineHeight: 1.65 },
    h2: { fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.7 },
    h3: { fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.8 },
    body1: { lineHeight: 2 },
    body2: { lineHeight: 1.9 },
    button: { textTransform: 'none', fontWeight: 700, lineHeight: 1.9 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { minHeight: 44, padding: '9px 22px' } } },
    MuiIconButton: { styleOverrides: { root: { minWidth: 44, minHeight: 44 } } },
    MuiCard: { defaultProps: { elevation: 0 } },
    MuiContainer: { defaultProps: { maxWidth: 'lg' } },
  },
});

export default theme;
