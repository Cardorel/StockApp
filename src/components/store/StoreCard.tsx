import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constants/COLORS.ts';
import {useAppDispatch} from '../../hooks/reduxHooks.ts';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeCurrentItemFromCart,
} from '../../store/features/stock/cartSlice.ts';
import {elevation, shadow} from '../../constants/Shadow.ts';

interface StoreProductInterface {
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  discountPercentage: string;
  id: number;
  brand: string;
}

export const StoreProduct = ({
  price,
  quantity,
  title,
  thumbnail,
  discountPercentage,
  id,
  brand,
}: StoreProductInterface) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image style={styles.image} source={{uri: thumbnail}} />
      </View>
      <View style={styles.leftContent}>
        <View style={styles.flexContent}>
          <View>
            <Text numberOfLines={1} style={styles.brandText}>
              {title}
            </Text>
            <Text numberOfLines={1}>{brand}</Text>
          </View>
          <Pressable onPress={() => dispatch(removeCurrentItemFromCart(id))}>
            <Icon name="trash-outline" color="red" size={20} />
          </Pressable>
        </View>
        <View style={styles.flexContent}>
          <View style={[styles.quantityContent]}>
            <Pressable onPress={() => dispatch(decrementItemQuantity(id))}>
              <Icon
                style={styles.iconBg}
                name="remove-outline"
                color={COLOR.white_color}
                size={20}
              />
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable onPress={() => dispatch(incrementItemQuantity(id))}>
              <Icon
                style={styles.iconBg}
                name="add-outline"
                color={COLOR.white_color}
                size={20}
              />
            </Pressable>
          </View>
          <Text style={styles.priceText}>
            ${(price - (price * +discountPercentage) / 100).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.white_color,
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
    gap: 8,
    ...shadow,
    ...elevation,
  },
  leftContent: {
    flex: 1,
    paddingRight: 10,
  },
  content: {
    padding: 10,
    margin: 10,
  },
  imageContent: {
    width: 150,
    height: 120,
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flexContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  iconBg: {
    backgroundColor: COLOR.secondary_color,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  quantityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLOR.black_color,
  },
  brandText: {
    color: COLOR.secondary_color,
    fontSize: 18,
  },
});
