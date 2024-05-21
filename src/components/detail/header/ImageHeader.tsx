import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../../constants/COLORS.ts';
import {DotIndicator} from '../../shared/DotIndicator.tsx';
import {useNavigation} from '@react-navigation/native';

interface ImageHeaderProps {
  images: string[];
  title: string;
}

const {width} = Dimensions.get('screen');

export const ImageHeader = ({images, title}: ImageHeaderProps) => {
  const {goBack} = useNavigation();
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <View style={styles.content}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({viewableItems}) => {
          if (viewableItems.length > 0) {
            setImageIndex(viewableItems[0].index || 0);
          }
        }}
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Image style={[styles.image]} source={{uri: item}} />
        )}
      />
      <View style={styles.headerContent}>
        <Pressable onPress={() => goBack()}>
          <Icon
            style={styles.icon_bg}
            name="arrow-back-outline"
            size={30}
            color={COLOR.white_color}
          />
        </Pressable>
        <Text numberOfLines={1} style={[styles.title, styles.flex]}>
          {title}
        </Text>
        <View style={[styles.share_favorite]}>
          <Icon name="heart-outline" size={30} color={COLOR.secondary_color} />
          <Icon
            name="share-social-outline"
            size={30}
            color={COLOR.secondary_color}
          />
        </View>
      </View>
      <View style={styles.dotContent}>
        <FlatList
          data={images}
          contentContainerStyle={styles.dotContent}
          renderItem={({index}) => {
            const activeColor =
              index === imageIndex ? COLOR.secondary_color : COLOR.black_color;
            return <DotIndicator color={activeColor} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  image: {
    width,
    height: 350,
    resizeMode: 'contain',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    gap: 20,
    top: 10,
    left: 0,
    zIndex: 1,
    padding: 20,
    flex: 1,
  },
  share_favorite: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon_bg: {
    borderRadius: 5,
    backgroundColor: COLOR.secondary_color,
    padding: 7,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR.secondary_color,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: COLOR.black_color,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255,0.4)',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  dotContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  flex: {
    flex: 1,
  },
});
