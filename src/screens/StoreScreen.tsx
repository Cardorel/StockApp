import React, {useEffect} from 'react';
import StoreProduct from '../components/store';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks.ts';
import {
  selectAddNewItemToCart,
  totalPriceAndTotalQuantity,
} from '../store/features/stock/cartSlice.ts';

export const StoreScreen = () => {
  const cartItems = useAppSelector(selectAddNewItemToCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(totalPriceAndTotalQuantity(cartItems));
  }, [dispatch, cartItems]);

  return (
    <StoreProduct data={cartItems} message={'Your cart is currently empty.'} />
  );
};
