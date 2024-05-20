import React from 'react';
import {OfferCard} from './OfferCard.tsx';
import {TopHeader} from '../../shared/TopHeader.tsx';
import {FlatList} from 'react-native';
import {useSpecialOffer} from '../../../hooks/useSpecialOffer.ts';

export const OfferList = () => {
  const {specialOfferData} = useSpecialOffer('');
  return (
    <>
      <TopHeader
        linkText="See All"
        to={'SearchScreen' as never}
        headingText="#SpecialOffer"
      />
      {specialOfferData && (
        <FlatList
          data={specialOfferData}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <OfferCard {...item} />}
        />
      )}
    </>
  );
};
