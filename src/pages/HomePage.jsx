import { Box, Button, Container, Typography } from '@mui/material';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';

export default function HomePage({ products, categories, onBrowse, onSelectProduct }) {
  return (
    <Container sx={{ pt: { xs: 3, md: 4 } }}>
      <Hero onBrowse={onBrowse} />
      <Box component="section" aria-labelledby="categories-title" sx={{ mt: { xs: 5, md: 7 } }}>
        <SectionTitle id="categories-title" title="برای هر گوشهٔ خانه" subtitle="سبک خودتان را در جزئیات پیدا کنید." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
          {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
        </Box>
      </Box>
      <Box component="section" aria-labelledby="featured-title" sx={{ mt: { xs: 5, md: 7 } }}>
        <SectionTitle id="featured-title" title="انتخاب‌های میترا" subtitle="ساده، کاربردی و دوست‌داشتنی.">
          <Button onClick={onBrowse}>همهٔ محصولات <span aria-hidden="true" style={{ marginInlineStart: 12 }}>←</span></Button>
        </SectionTitle>
        <ProductGrid products={products.filter((product) => product.featured)} onSelect={onSelectProduct} />
      </Box>
      <Box component="section" sx={{ mt: 5, p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider', borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="overline" color="text.secondary">فلسفهٔ میترا</Typography>
        <Typography variant="h2" sx={{ mt: 1 }}>کمتر، اما دل‌نشین‌تر.</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>ما به خانه‌هایی باور داریم که در آن‌ها هر وسیله جایی دارد و هر گوشه داستانی. انتخاب‌هایی با رنگ‌های طبیعی و فرم‌های ساده، برای زندگی روزمره.</Typography>
      </Box>
    </Container>
  );
}
