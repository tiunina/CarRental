import React from 'react';
import css from './ViewCatalogBtn.module.css';
const ViewCatalogBtn = ({ children }) => {
  return (
    <>
      <button className={css.viewBtn}>{children}</button>
    </>
  );
};

export default ViewCatalogBtn;
