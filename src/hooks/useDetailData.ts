import {useNavigation, useRoute} from '@react-navigation/native';
import {useGetProductByIdQuery} from '../store/features/stock/stockSlice.ts';
import {useCallback} from 'react';
import {useAppDispatch} from './reduxHooks.ts';
import {addNewItemToCart} from '../store/features/stock/cartSlice.ts';

export const useDetailData = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const id = (params as {id: string}).id;
  const {data} = useGetProductByIdQuery(id);

  const handlePurchaseNow = useCallback(() => {
    dispatch(addNewItemToCart(data));
    navigate('Store' as never);
  }, [data, dispatch, navigate]);

  return {
    data,
    handlePurchaseNow,
  };
};
