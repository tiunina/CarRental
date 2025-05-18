import React from 'react';
import css from './Hero.module.css';
import { Link } from 'react-router-dom';
import ViewCatalogBtn from '../ViewCatalogBtn/ViewCatalogBtn.jsx';
const Hero = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.description}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog">
        <ViewCatalogBtn>View Catalog</ViewCatalogBtn>
      </Link>
    </div>
  );
};

export default Hero;
