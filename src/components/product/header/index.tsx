import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {Input} from '../../UI/inputs/Input.tsx';
import {SortProduct} from '../../shared/SortProduct.tsx';

interface ProductHeaderProps {
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value?: string;
  onPressByName: () => void;
  onPressByRating: () => void;
  onPressByPrice: () => void;
}

export const ProductHeader = ({
  onChange,
  value,
  onPressByName,
  onPressByRating,
  onPressByPrice,
}: ProductHeaderProps) => {
  return (
    <View style={styles.container}>
      <Input placeholder={'Search...'} value={value} onChange={onChange} />
      <View style={styles.sortContainer}>
        <Text>Sort By:</Text>
        <View style={styles.sortContent}>
          <SortProduct
            onPress={onPressByName}
            iconName="swap-vertical-outline"
            text="Name"
          />
          <SortProduct
            onPress={onPressByRating}
            iconName="swap-vertical-outline"
            text="Rating"
          />
          <SortProduct
            onPress={onPressByPrice}
            iconName="swap-vertical-outline"
            text="Price"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortContent: {
    flexDirection: 'row',
    padding: 10,
    gap: 20,
  },
  sortContainer: {
    marginVertical: 10,
  },
  container: {
    padding: 20,
  },
});
