import { Box, Button, Chip, Container, Divider, Typography } from '@mui/material';
import formatPrice from '../utils/formatPrice';

export default function ProductDetailsPage({ product, onBack }) {
  return (
    <Container sx={{ pt: 4 }}>
      <Button onClick={onBack} sx={{ mb: 3 }}>→ بازگشت به محصولات</Button>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 7 }, alignItems: 'center' }}>
        <Box component="img" src={product.image} alt={product.title} sx={{ width: '100%', aspectRatio: '1', objectFit: 'contain', bgcolor: '#f0eee7', borderRadius: 3 }} />
        <Box>
          {product.badge && <Chip label={product.badge} size="small" sx={{ mb: 2 }} />}
          <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 38 } }}>{product.title}</Typography>
          <Typography sx={{ my: 2, fontSize: 22 }}>{formatPrice(product.price)}</Typography>
          <Typography color="text.secondary">{product.description}</Typography>
          <Divider sx={{ my: 3 }} />
          <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: '75px 1fr', gap: 2 }}>
            <Typography component="dt" color="text.secondary">جنس</Typography>
            <Typography component="dd" sx={{ m: 0 }}>{product.material}</Typography>
            <Typography component="dt" color="text.secondary">ابعاد</Typography>
            <Typography component="dd" sx={{ m: 0 }}>{product.dimensions}</Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 4, bgcolor: '#edf0e8', p: 2, borderRadius: 2 }}>این محصول نمونهٔ نمایشی است و امکان خرید آن فعلاً وجود ندارد.</Typography>
        </Box>
      </Box>
    </Container>
  );
}
