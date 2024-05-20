import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductHeader} from './header';
import {ProductContent} from './content';
import {useDataCategory} from '../../hooks/useDataCategory.ts';
import {useAppSelector} from '../../hooks/reduxHooks.ts';
import {selectProductByCategory} from '../../store/features/stock/sortSlice.ts';
import {useRoute} from '@react-navigation/native';

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
    <View style={styles.container}>
      <ProductHeader
        onPressByName={handleSortByName}
        onPressByPrice={handleSortByPrice}
        onPressByRating={handleSortByRating}
        value={search}
        onChange={handleSearch}
      />
      <ProductContent products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
