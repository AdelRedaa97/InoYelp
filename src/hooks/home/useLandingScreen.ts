// import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {
  homescreen_getResaurants,
  homescreen_toggleListType,
} from '../../redux/actions';

export const useLandingScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const processing = useAppSelector(state => state.homeReducer.processing);
  const listType = useAppSelector(state => state.homeReducer.listType);
  const restaurants = useAppSelector(state => state.homeReducer.restaurants);

  const [searchTxt, onChangeSearchText] = useState('');

  useEffect(() => {
    dispatch(homescreen_getResaurants());
    return () => {};
  }, []);

  const exitTheApp = () => {
    // use react-native-exit-app library
  };

  const onPressToggleListType = () => {
    dispatch(homescreen_toggleListType());
  };

  return {
    exitTheApp,
    processing,
    listType,
    onPressToggleListType,
    searchTxt,
    onChangeSearchText,
    restaurants: searchTxt
      ? restaurants.filter(item =>
          item.name.toLowerCase().includes(searchTxt.toLowerCase()),
        )
      : restaurants,
  };
};
