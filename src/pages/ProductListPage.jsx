import { Container, Typography } from '@mui/material';
import ProductGrid from '../components/ProductGrid';

export default function ProductListPage({ products, onSelectProduct }) {
  return (
    <Container sx={{ pt: { xs: 4, md: 6 } }}>
      <Typography variant="overline" color="text.secondary">مجموعهٔ میترا</Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 42 }, mt: 1 }}>همهٔ محصولات</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>انتخابی برای هر گوشهٔ خانه · {products.length.toLocaleString('fa-IR')} محصول</Typography>
      <ProductGrid products={products} onSelect={onSelectProduct} />
    </Container>
  );
}
