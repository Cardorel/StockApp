import {useAppDispatch} from './reduxHooks.ts';
import {useEffect} from 'react';
import {searchProductBy} from '../store/features/stock/SearchSlice.ts';

export const useDispatchBrand = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(searchProductBy('All'));
  }, [dispatch]);
};
