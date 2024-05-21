import React from 'react';
import {ProductHeader} from './header';
import {ProductContent} from './content';
import {useDataCategory} from '../../hooks/useDataCategory.ts';
import {useAppSelector} from '../../hooks/reduxHooks.ts';
import {selectProductByCategory} from '../../store/features/stock/sortSlice.ts';
import {useRoute} from '@react-navigation/native';
import {Container} from '../UI/container/Container.tsx';

export const Products = () => {
  const {params} = useRoute();
  const category = (params as {category: string}).category;
  const {
    handleSortByPrice,
    handleSearch,
    handleSortByRating,
    handleSortByName,
    search,
  } = useDataCategory(category);
  const products = useAppSelector(selectProductByCategory);
  return (
    <Container>
      <ProductHeader
        onPressByName={handleSortByName}
        onPressByPrice={handleSortByPrice}
        onPressByRating={handleSortByRating}
        value={search}
        onChange={handleSearch}
      />
      <ProductContent products={products} />
    </Container>
  );
};
