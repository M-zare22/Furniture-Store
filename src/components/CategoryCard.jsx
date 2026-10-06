import { Box, Card, Typography } from '@mui/material';

// Categories are presentational in phase 1; filtering belongs to phase 2.
export default function CategoryCard({ category }) {
  return (
    <Card component="article" sx={{ bgcolor: '#f1f0ea', p: 2.5, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
      <Box>
        <Typography variant="h3">{category.title}</Typography>
        <Typography variant="caption" color="text.secondary">{category.description}</Typography>
      </Box>
      <Box component="img" src={category.image} alt="" loading="lazy" sx={{ width: { xs: 62, sm: 80 }, height: 90, objectFit: 'contain' }} />
    </Card>
  );
}
