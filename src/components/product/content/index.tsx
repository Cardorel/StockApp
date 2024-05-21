import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {CardProductList} from '../../shared/CardProductList.tsx';
import {COLOR} from '../../../constants/COLORS.ts';
import {ProductInterface} from '../../../interface/Stock.ts';

type ProductContentProps = {
  products: ProductInterface[];
};

export const ProductContent = ({products}: ProductContentProps) => {
  return (
    <>
      <Text style={styles.text}>Total: {products?.length} Product (s)</Text>
      <CardProductList products={products} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    fontSize: 18,
    color: COLOR.black_color,
    paddingBottom: 20,
  },
});
