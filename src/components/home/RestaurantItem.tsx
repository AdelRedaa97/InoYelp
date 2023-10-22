import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IRestaurant, TListType} from './../../definitions/redux/IHome';
import CImage from '../common/CImage';
import CText from '../common/CText';
import typography from '../../theme/typography';

interface IRestaurantItem {
  listType: TListType;
  restaurant: IRestaurant;
}

const RestaurantItem = ({listType = 'list', restaurant}: IRestaurantItem) => {
  const flex = listType === 'list' ? 1 : 0.5;
  return (
    <View
      style={{
        ...styles.container,
        flex,
      }}>
      <CImage style={styles.img} source={{uri: restaurant.image_url}} />
      <View style={styles.body}>
        <CText style={styles.title}>{restaurant.name}</CText>
        <View style={styles.reviews}>
          <CText
            style={
              styles.reviewTxt
            }>{`${restaurant.rating} Stars, ${restaurant.review_count} Reviews`}</CText>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  img: {
    flex: 1,
  },
  body: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: typography.fontSize.fs22,
    fontFamily: typography.fontFamily.Tajawal_Bold,
    color: '#FFF',
    textAlign: 'center',
  },
  reviews: {
    width: '50$%',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  reviewTxt: {
    width: '98%',
    textAlign: 'center',
  },
});
