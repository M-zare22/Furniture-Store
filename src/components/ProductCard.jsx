import { Box, Card, CardActionArea, Chip, Typography } from '@mui/material';
import formatPrice from '../utils/formatPrice';

export default function ProductCard({ product, onSelect }) {
  return (
    <Card component="article" sx={{ bgcolor: 'transparent', height: '100%' }}>
      <CardActionArea onClick={() => onSelect(product)} aria-label={`مشاهدهٔ ${product.title}`} sx={{ height: '100%', display: 'block', borderRadius: 2 }}>
        <Box sx={{ position: 'relative', bgcolor: '#f0eee7', borderRadius: 2, overflow: 'hidden' }}>
          <Box component="img" src={product.image} alt={product.title} loading="lazy" width="400" height="400" sx={{ width: '100%', height: 'auto', aspectRatio: '1', objectFit: 'contain', transition: 'transform 200ms', '.MuiCardActionArea-root:hover &': { transform: 'scale(1.04)' } }} />
          {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, right: 12, bgcolor: '#ffffffed', fontSize: 11 }} />}
        </Box>
        <Box sx={{ py: 2, px: 0.5 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 14, sm: 17 } }}>{product.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: { xs: 12, sm: 14 } }}>{formatPrice(product.price)}</Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>مشاهدهٔ جزئیات <span aria-hidden="true">←</span></Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
