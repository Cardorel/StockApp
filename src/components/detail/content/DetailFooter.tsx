import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {borderRadius, COLOR} from '../../../constants/COLORS.ts';
import {elevation, shadow} from '../../../constants/Shadow.ts';

interface DetailFooterProps {
  price: number;
  discountPercentage: number;
  handlePurchaseNow: () => void;
}
export const DetailFooter = ({
  price,
  discountPercentage,
  handlePurchaseNow,
}: DetailFooterProps) => {
  return (
    <View style={styles.btnContent}>
      <View>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.priceContent}>
          <Text style={styles.device}>$</Text>
          <Text style={styles.price}>
            {(price - (price * +discountPercentage) / 100).toFixed(2)}
          </Text>
        </View>
      </View>
      <Pressable style={styles.btn} onPress={handlePurchaseNow}>
        <Icon name={'cart-outline'} color={COLOR.white_color} size={20} />
        <Text style={styles.btnText}>Buy now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLOR.main_color,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btnText: {
    color: COLOR.white_color,
    fontSize: 16,
  },
  btnContent: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.white_color,
    ...shadow,
    ...elevation,
    borderTopColor: COLOR.secondary_color,
    borderTopWidth: 4,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    padding: 10,
  },
  priceContent: {
    flexDirection: 'row',
    gap: 1,
  },
  price: {
    color: COLOR.black_color,
    fontSize: 25,
    fontWeight: 'bold',
  },
  device: {
    color: COLOR.secondary_color,
    fontSize: 18,
  },
  priceText: {
    color: COLOR.black_color,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
