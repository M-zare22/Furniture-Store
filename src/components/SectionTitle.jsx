import { Box, Typography } from '@mui/material';

export default function SectionTitle({ id, title, subtitle, children }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 3 }}>
      <Box>
        <Typography id={id} variant="h2">{title}</Typography>
        {subtitle && <Typography color="text.secondary" sx={{ mt: 0.5 }}>{subtitle}</Typography>}
      </Box>
      {children}
    </Box>
  );
}
