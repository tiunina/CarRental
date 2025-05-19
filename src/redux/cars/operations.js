import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authInstance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchBrands = createAsyncThunk('brands', async (_, thunkAPI) => {
  try {
    const { data } = await authInstance.get('/brands');
    return data;
  } catch (error) {
    console.error('Error response: ', error.response);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCars = createAsyncThunk('cars', async (params, thunkAPI) => {
  try {
    const { brand, rentalPrice, minMileage, maxMileage, limit, page } =
      params || {};
    const { data } = await authInstance.get('/cars', {
      params: {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit,
        page,
      },
    });
    console.log('DATA :', data);
    return data;
  } catch (error) {
    console.error('Error response: ', error.response);
    return thunkAPI.rejectWithValue(error.message);
  }
});
