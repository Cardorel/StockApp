import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from '../../shared/Rating.tsx';
import {ProductDesc} from './ProductDesc.tsx';
import {ProductInterface} from '../../../interface/Stock.ts';
import {COLOR} from '../../../constants/COLORS.ts';

export const DetailContent = ({
  description,
  brand,
  stock,
  category,
  rating,
}: ProductInterface) => {
  return (
    <View style={styles.content}>
      <View style={styles.productContent}>
        <Text style={styles.brandName}>{brand}</Text>
        <Rating rating={rating} />
      </View>
      <ProductDesc title={'Description'} desc={description} />
      <ProductDesc title="Category" desc={category} />
      <ProductDesc title="Our Stock" desc={stock} />
    </View>
  );
};

const styles = StyleSheet.create({
  productContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  content: {
    padding: 10,
    marginTop: 2,
    marginBottom: 60,
    backgroundColor: 'white',
    height: '100%',
  },
  productName: {
    fontSize: 35,
    fontWeight: '500',
    marginVertical: 20,
    color: COLOR.secondary_color,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR.black_color,
  },
});
