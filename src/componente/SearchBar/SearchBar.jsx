import React, { useEffect, useState } from 'react';
import css from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  firstFilterStyles,
  getBrandOptions,
  priceOptions,
  secondFilterStyles,
} from '../../utils/filter.js';
import { selectBrands } from '../../redux/cars/selectors.js';
import { fetchBrands, fetchCars } from '../../redux/cars/operations.js';
const SearchBar = () => {
  const dispatch = useDispatch();
  const options = priceOptions();
  const brands = useSelector(selectBrands);
  const brandOptions = getBrandOptions(brands);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const formatOptionLabel = (option, { context }) =>
    context === 'value' ? `To $${option.label}` : option.label;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBrands());
    };
    fetchData();
  }, [dispatch]);

  const handleSearch = async () => {
    const params = {
      brand: selectedBrand ? selectedBrand.value : null,
      rentalPrice: selectedPrice ? selectedPrice.value : null,
      minMileage: minMileage ? minMileage : null,
      maxMileage: maxMileage ? maxMileage : null,
    };
    await dispatch(fetchCars(params));
  };

  return (
    <div className={css.formWrapper}>
      <div className="w-1/4">
        <label className={css.label}>Car brand</label>
        <Select
          className="cursor-pointer"
          options={brandOptions}
          value={selectedBrand}
          onChange={setSelectedBrand}
          onMenuOpen={() => setIsOpenBrand(true)}
          onMenuClose={() => setIsOpenBrand(false)}
          placeholder="Select a brand"
          styles={firstFilterStyles(isOpenBrand)}
        />
      </div>

      <div className="w-1/4">
        <label className={css.label}>Price / 1 hour</label>
        <Select
          options={options}
          value={selectedPrice}
          onChange={setSelectedPrice}
          onMenuOpen={() => setIsOpenPrice(true)}
          onMenuClose={() => setIsOpenPrice(false)}
          placeholder="Select price"
          className="cursor-pointer"
          styles={secondFilterStyles(isOpenPrice)}
          formatOptionLabel={formatOptionLabel}
        />
      </div>

      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="mileage">
          Сar mileage / km
        </label>
        <div className={css.mileageContainer}>
          <div className={css.inputBox}>
            <span
              className={`${css.placeholder} ${maxMileage ? css.filled : ''}`}
            >
              From
            </span>

            <input
              className={css.firstInput}
              type="number"
              id="mileage"
              value={minMileage}
              onChange={e => setMinMileage(e.target.value)}
            />
          </div>
          <div className={css.inputBox}>
            <span
              className={`${css.placeholder} ${maxMileage ? css.filled : ''}`}
            >
              To
            </span>

            <input
              className={css.secondInput}
              type="number"
              id="mileage"
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className={css.submit} type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
