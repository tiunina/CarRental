import React from 'react';
import css from './HomePage.module.css';
import Hero from '../../componente/Hero/Hero.jsx';

const HomePage = () => {
  return (
    <div className={css.heroImg}>
      <Hero />
    </div>
  );
};

export default HomePage;
