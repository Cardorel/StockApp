import React from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import {borderRadius, COLOR} from '../../../constants/COLORS.ts';
import {elevation, shadow} from '../../../constants/Shadow.ts';
import {ProductInterface} from '../../../interface/Stock.ts';
import {useNavigation} from '@react-navigation/native';

export const OfferCard = ({
  title,
  brand,
  discountPercentage,
  thumbnail,
  id,
}: ProductInterface) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.content}
      onPress={() =>
        navigate(
          'Details' as never,
          {
            id,
          } as never,
        )
      }>
      <View style={styles.topOfferContent}>
        <View>
          <Text style={styles.offerCard}>Get Special Offer</Text>
          <View style={styles.percentContent}>
            <Text style={styles.upToText}>Up to</Text>
            <Text style={styles.percentNumberText}>{discountPercentage}</Text>
            <Text style={styles.percentText}>%</Text>
          </View>
          <Text style={styles.productText}>
            {title} | {brand}
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: thumbnail,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  offerCard: {
    fontSize: 25,
    color: COLOR.white_color,
    fontWeight: 'bold',
  },
  claimButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    backgroundColor: COLOR.secondary_color,
    marginHorizontal: 20,
    borderRadius,
    padding: 20,
    ...shadow,
    ...elevation,
    marginBottom: 20,
  },
  image: {
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
    width: 100,
  },
  topOfferContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
  },
  upToText: {
    fontSize: 25,
    color: COLOR.white_color,
    marginRight: 5,
  },
  percentContent: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  percentText: {
    color: COLOR.main_color,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 3,
  },
  percentNumberText: {
    color: COLOR.white_color,
    fontWeight: 'bold',
    fontSize: 30,
  },
  productText: {
    marginVertical: 10,
    color: COLOR.white_color,
  },
});
