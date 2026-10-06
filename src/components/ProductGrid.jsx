import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onSelect }) {
  if (products.length === 0) {
    return <Typography sx={{ py: 5 }}>محصولی برای نمایش وجود ندارد.</Typography>;
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 2, sm: 3 } }}>
      {products.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}
    </Box>
  );
}
