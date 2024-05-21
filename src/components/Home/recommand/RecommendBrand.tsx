import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../../constants/COLORS.ts';
import {useRecommendBrand} from '../../../hooks/useRecommendBrand.ts';

interface RecommendBrandProps {
  brands: string[];
}

export const RecommendBrand = ({brands}: RecommendBrandProps) => {
  const {handleSelectedId, selectedBrand} = useRecommendBrand();
  return (
    <View style={styles.container}>
      <FlatList
        data={brands}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        extraData={selectedBrand}
        renderItem={({item}) => {
          const activeBrand =
            item === selectedBrand ? styles.activeBtn : styles.content;
          return (
            <TouchableOpacity onPress={() => handleSelectedId(item)}>
              <Text style={[activeBrand]}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    paddingBottom: 20,
  },
  content: {
    borderWidth: 1,
    borderColor: COLOR.secondary_color,
    borderRadius: 10,
    margin: 5,
    color: COLOR.black_color,
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    fontWeight: '400',
    backgroundColor: COLOR.white_color,
  },
  activeBtn: {
    backgroundColor: COLOR.secondary_color,
    color: COLOR.white_color,
    borderWidth: 1,
    borderColor: COLOR.secondary_color,
    borderRadius: 10,
    margin: 5,
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
