import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCars } from './operations';

const initialState = {
  brands: [],
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
