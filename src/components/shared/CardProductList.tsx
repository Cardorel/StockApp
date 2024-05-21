import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardProduct} from './CardProduct.tsx';
import {ProductInterface} from '../../interface/Stock.ts';

interface CardProductProps {
  products: ProductInterface[];
}

export const CardProductList = ({products}: CardProductProps) => {
  return (
    <View style={styles.list}>
      {products?.map(product => (
        <CardProduct key={product.id} {...product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
});
