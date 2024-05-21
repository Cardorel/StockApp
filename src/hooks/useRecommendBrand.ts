import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from './reduxHooks.ts';
import {
  searchProductBy,
  selectSearch,
} from '../store/features/stock/SearchSlice.ts';

export const useRecommendBrand = () => {
  const dispatch = useAppDispatch();
  const selectedBrand = useAppSelector(selectSearch);
  const handleSelectedId = useCallback(
    (brand: string) => {
      dispatch(searchProductBy(brand));
    },
    [dispatch],
  );

  return {
    handleSelectedId,
    selectedBrand,
  };
};
