import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StoreProduct} from './StoreCard.tsx';
import {StoreListProps} from '../../interface/CartToAdd.ts';

export const StoreList = ({data}: StoreListProps) => {
  return (
    <View style={styles.container}>
      {data?.map(cart => {
        return <StoreProduct key={cart.id} {...cart} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    padding: 20,
  },
});
