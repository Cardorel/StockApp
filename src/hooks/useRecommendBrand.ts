import {useCallback, useState} from 'react';
import {useAppDispatch} from './reduxHooks.ts';
import {searchProductBy} from '../store/features/stock/SearchSlice.ts';

export const useRecommendBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const dispatch = useAppDispatch();
  const handleSelectedId = useCallback(
    (brand: string) => {
      dispatch(searchProductBy(brand));
      setSelectedBrand(brand);
    },
    [dispatch],
  );

  return {
    selectedBrand,
    handleSelectedId,
  };
};
