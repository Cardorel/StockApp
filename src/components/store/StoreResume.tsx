import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {borderRadius, COLOR} from '../../constants/COLORS.ts';
import {elevation, shadow} from '../../constants/Shadow.ts';
import {useAppSelector} from '../../hooks/reduxHooks.ts';
import {
  selectTotalPrice,
  selectTotalQuantity,
} from '../../store/features/stock/cartSlice.ts';

export const StoreResume = () => {
  const total = useAppSelector(selectTotalPrice);
  const quantity = useAppSelector(selectTotalQuantity);
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Code Promo..." />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalContent}>
          <Text style={styles.text}>Sub Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.totalContent}>
          <Text style={styles.text}>Total of items</Text>
          <Text>{quantity}</Text>
        </View>
        <View style={styles.totalContent}>
          <Text style={styles.text}>Shipping</Text>
          <Text>$0</Text>
        </View>
      </View>
      <View style={[styles.totalContent, styles.total]}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>${total.toFixed(2)}</Text>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Checkout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLOR.white_color,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 'auto',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 20,
    ...shadow,
    ...elevation,
    zIndex: 100,
  },
  totalContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  totalContainer: {
    paddingVertical: 20,
    borderBottomColor: COLOR.secondary_color,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    color: COLOR.black_color,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  input: {
    borderRadius,
    borderWidth: 1,
    borderColor: COLOR.secondary_color,
    padding: 10,
  },
  total: {
    marginTop: 40,
  },
  btn: {
    backgroundColor: COLOR.secondary_color,
    padding: 12,
    alignItems: 'center',
    borderRadius,
  },
  btnText: {
    color: COLOR.white_color,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
