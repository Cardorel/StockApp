import React from 'react';
import {ImageHeader} from './header/ImageHeader.tsx';
import {DetailContent} from './content/DetailContent.tsx';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DetailFooter} from './content/DetailFooter.tsx';
import {useDetailData} from '../../hooks/useDetailData.ts';

export const Detail = () => {
  const {handlePurchaseNow, data} = useDetailData();
  return (
    <View style={styles.container}>
      <ImageHeader images={data?.images} title={data?.title} />
      <ScrollView>
        <DetailContent {...data} />
      </ScrollView>
      <DetailFooter
        price={data?.price}
        discountPercentage={data?.discountPercentage}
        handlePurchaseNow={handlePurchaseNow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});
