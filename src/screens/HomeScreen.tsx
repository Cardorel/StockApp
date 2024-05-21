import React from 'react';
import Home from '../components/Home';
import {useAppSelector} from '../hooks/reduxHooks.ts';
import {selectSearch} from '../store/features/stock/SearchSlice.ts';
import {useProducts} from '../hooks/useProducts.ts';
import {useSpecialOffer} from '../hooks/useSpecialOffer.ts';

export const HomeScreen = () => {
  const search = useAppSelector(selectSearch);
  const {isLoading, isError} = useProducts(search);
  const {isLoadingSpecialOffer, isErrorSpecialOffer} = useSpecialOffer('');
  return (
    <Home
      isLoading={isLoading && isLoadingSpecialOffer}
      hasError={isErrorSpecialOffer && isError}
    />
  );
};
