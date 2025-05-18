import { lazy, Suspense } from 'react';
import './App.css';
import Layout from './componente/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CarPage = lazy(() => import('./pages/CarPage/CarPage.jsx'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CarPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
