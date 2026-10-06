import { useState } from 'react';
import StoreLayout from './layouts/StoreLayout';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { categories, products } from './data/catalog';

export default function App() {
  // This is temporary view state, not URL routing or business state.
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  function navigate(page) {
    setCurrentPage(page);
    setSelectedProduct(null);
    document.getElementById('main-content')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function selectProduct(product) {
    setSelectedProduct(product);
    setCurrentPage('details');
    document.getElementById('main-content')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return (
    <StoreLayout currentPage={currentPage} onNavigate={navigate}>
      {currentPage === 'home' && <HomePage products={products} categories={categories} onBrowse={() => navigate('products')} onSelectProduct={selectProduct} />}
      {currentPage === 'products' && <ProductListPage products={products} onSelectProduct={selectProduct} />}
      {currentPage === 'details' && selectedProduct && <ProductDetailsPage product={selectedProduct} onBack={() => navigate('products')} />}
    </StoreLayout>
  );
}
