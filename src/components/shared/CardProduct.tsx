import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {elevation, shadow} from '../../constants/Shadow.ts';
import {Rating} from './Rating.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../constants/COLORS.ts';
import {ProductInterface} from '../../interface/Stock.ts';
import {useNavigation} from '@react-navigation/native';

export const CardProduct = ({
  thumbnail,
  title,
  price,
  discountPercentage,
  id,
  rating,
}: ProductInterface) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.cardContent}
      onPress={() =>
        navigate(
          'Details' as never,
          {
            id,
          } as never,
        )
      }>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: thumbnail,
          }}
        />
        <Icon
          style={styles.favorite}
          name="heart-outline"
          size={30}
          color={COLOR.secondary_color}
        />
        <Text style={styles.discount}>{discountPercentage} %</Text>
      </View>
      <View style={styles.productTextContent}>
        <View style={styles.name_rating}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Rating rating={rating} />
        </View>
        <View style={styles.priceContent}>
          <Text style={styles.price}>
            $ {(price - (price * +discountPercentage) / 100).toFixed(2)}
          </Text>
          <Text style={styles.originalPrice}>$ {price.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    width: '46%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  price: {
    fontSize: 20,
    color: COLOR.secondary_color,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    ...shadow,
    ...elevation,
    position: 'relative',
  },
  productTextContent: {
    gap: 5,
    marginVertical: 10,
  },
  name_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  favorite: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 10,
    ...shadow,
    ...elevation,
  },
  originalPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  priceContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  discount: {
    position: 'absolute',
    top: 5,
    left: 7,
    zIndex: 10,
    backgroundColor: COLOR.secondary_color,
    borderRadius: 10,
    padding: 5,
    color: COLOR.white_color,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
