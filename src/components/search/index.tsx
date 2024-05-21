import React from 'react';
import CategoryList from './category/CategoryList.tsx';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native";
import {Input} from '../UI/inputs/Input.tsx';
import {withFetchHomeData} from '../../hoc/withFetchHomeData.tsx';
import {Container} from '../UI/container/Container.tsx';

interface SearchProductProps {
  search: string;
  handleSearch: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  filteredData: string[];
  isLoading: boolean;
  hasError: boolean;
}

const SearchProduct = ({
  handleSearch,
  search,
  filteredData,
}: SearchProductProps) => {
  return (
    <Container>
      <View style={styles.inputContent}>
        <Input
          onChange={handleSearch}
          placeholder={'Search category'}
          value={search}
        />
      </View>
      <CategoryList data={filteredData} message={'No category found.'} />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputContent: {
    padding: 10,
    marginBottom: 10,
  },
});

export default withFetchHomeData(SearchProduct);
