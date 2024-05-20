import {StyleSheet, View} from 'react-native';
import {SpecialHeading} from '../UI/heading/SpecialHeading.tsx';
import {Link} from '../UI/links/Link.tsx';
import React from 'react';

interface TopHeaderProps {
  linkText: string;
  to: never;
  headingText: string;
}

export const TopHeader = ({to, linkText, headingText}: TopHeaderProps) => {
  return (
    <View style={styles.content}>
      <SpecialHeading text={headingText} />
      <Link to={to} text={linkText} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
});
