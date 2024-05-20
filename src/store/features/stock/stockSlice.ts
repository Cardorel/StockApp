import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const stockSlice = createApi({
  reducerPath: 'stock',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: builder => ({
    getListOfStocks: builder.query({
      query: (search: string) => {
        if (search.toLowerCase() === 'all') {
          return 'products';
        } else {
          return {
            url: 'products/search',
            params: {
              q: search,
            },
          };
        }
      },
    }),
    getProductById: builder.query({
      query: id => `products/${id}`,
    }),
    getProductByCategory: builder.query({
      query: category => `products/category/${category}`,
    }),
    getProductCategories: builder.query({
      query: () => 'products/categories',
    }),
  }),
});

export const {
  useGetListOfStocksQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetProductCategoriesQuery,
} = stockSlice;
