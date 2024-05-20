import React from 'react';
import CategoryList from './category/CategoryList.tsx';
import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {Input} from '../UI/inputs/Input.tsx';
import {withFetchHomeData} from '../../hoc/withFetchHomeData.tsx';

interface SearchProductProps {
  search: string;
  handleSearch: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  filteredData: string[];
  isLoading: boolean;
}

const SearchProduct = ({
  handleSearch,
  search,
  filteredData,
}: SearchProductProps) => {
  return (
    <>
      <View style={styles.container}>
        <Input
          onChange={handleSearch}
          placeholder={'Search category'}
          value={search}
        />
      </View>
      <ScrollView>
        <CategoryList data={filteredData} message={'No category found.'} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});

export default withFetchHomeData(SearchProduct);
