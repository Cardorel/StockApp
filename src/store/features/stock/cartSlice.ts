import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../index.ts';
import {CartToAddInterface} from '../../../interface/CartToAdd.ts';
import {
  addItemToCart,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleTotalPrice,
  handleTotalQuantity,
  removeItemFromCart,
} from '../../../utils';

type InitialStateType = {
  carts: CartToAddInterface[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: InitialStateType = {
  carts: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addNewItemToCart: (state, action: PayloadAction<CartToAddInterface>) => {
      return {
        ...state,
        carts: addItemToCart(state.carts, action.payload),
      };
    },
    removeCurrentItemFromCart: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        carts: removeItemFromCart(state.carts, action.payload),
      };
    },
    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        carts: handleIncrementQuantity(state.carts, action.payload),
      };
    },
    decrementItemQuantity: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        carts: handleDecrementQuantity(state.carts, action.payload),
      };
    },
    totalPriceAndTotalQuantity: (
      state,
      action: PayloadAction<CartToAddInterface[]>,
    ) => {
      return {
        ...state,
        totalPrice: handleTotalPrice(action.payload),
        totalQuantity: handleTotalQuantity(action.payload),
      };
    },
  },
});

export const selectAddNewItemToCart = (state: RootState) =>
  state.itemToCart.carts;

export const selectTotalPrice = (state: RootState) =>
  state.itemToCart.totalPrice;

export const selectTotalQuantity = (state: RootState) =>
  state.itemToCart.totalQuantity;

export const {
  addNewItemToCart,
  removeCurrentItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  totalPriceAndTotalQuantity,
} = cartSlice.actions;
