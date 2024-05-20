import {useGetProductCategoriesQuery} from '../store/features/stock/stockSlice.ts';

export const useCategories = (): {data: any; isCategoryLoading: any} => {
  const {data, isLoading} = useGetProductCategoriesQuery('');
  return {data, isCategoryLoading: isLoading};
};
