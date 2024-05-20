import React from 'react';
import {FlatList} from 'react-native';
import {CardProduct} from './CardProduct.tsx';
import {ProductInterface} from '../../interface/Stock.ts';

interface CardProductProps {
  products: ProductInterface[];
  height?: number;
}

const containerStyle = {
  paddingBottom: 50,
};

export const CardProductList = ({products, height = 350}: CardProductProps) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      style={{height}}
      contentContainerStyle={containerStyle}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <CardProduct {...item} />}
    />
  );
};
