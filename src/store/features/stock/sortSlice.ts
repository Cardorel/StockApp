import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../index.ts';
import {ProductInterface} from '../../../interface/Stock.ts';

type InitialStateType = {
  products: ProductInterface[];
};

const initialState: InitialStateType = {
  products: [],
};

export const sortSlice = createSlice({
  initialState,
  name: 'sort',
  reducers: {
    setProductByCategory: (
      state,
      action: PayloadAction<ProductInterface[]>,
    ) => {
      state.products = action.payload;
    },
  },
});

export const selectProductByCategory = (state: RootState) =>
  state.products.products;

export const {setProductByCategory} = sortSlice.actions;
