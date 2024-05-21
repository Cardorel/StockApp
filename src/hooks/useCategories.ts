import {useGetProductCategoriesQuery} from '../store/features/stock/stockSlice.ts';

export const useCategories = (): {
  data: any;
  isCategoryLoading: boolean;
  isError: boolean;
} => {
  const {data, isLoading, isError} = useGetProductCategoriesQuery('');
  return {data, isCategoryLoading: isLoading, isError};
};
