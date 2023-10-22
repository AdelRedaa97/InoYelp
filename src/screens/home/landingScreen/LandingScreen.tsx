import React from 'react';
import {CHeader, CText, ScreenContainer} from '../../../components';
import {styles} from './styles';
import {useLandingScreen} from '../../../hooks/home/useLandingScreen';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, FlatList, Pressable, View} from 'react-native';
import List from '../../../assets/svgs/List';
import Grid from '../../../assets/svgs/Grid';
import CTextInput from '../../../components/forms/CTextInput';
import RestaurantItem from '../../../components/home/RestaurantItem';
import Search from '../../../assets/svgs/Search';

const LandingScreen = (): JSX.Element => {
  const {
    exitTheApp,
    listType,
    onPressToggleListType,
    searchTxt,
    onChangeSearchText,
    restaurants,
    processing,
  } = useLandingScreen();
  const {t} = useTranslation();

  return (
    <ScreenContainer
      header={() => (
        <CHeader title={t('Restaurants').toString()} onPressBack={exitTheApp} />
      )}>
      <CTextInput
        value={searchTxt}
        onChangeText={onChangeSearchText}
        placeholder={'Search here ...'}
        style={styles.input}
        renderLeft={() => <Search />}
      />
      <View style={styles.row}>
        <CText style={styles.cost}>{t('Cost Effictive')}</CText>
        <Pressable onPress={onPressToggleListType}>
          {listType === 'list' ? <List /> : <Grid />}
        </Pressable>
      </View>
      {processing && (
        <View style={styles.row}>
          <ActivityIndicator />
        </View>
      )}
      <FlatList
        data={restaurants}
        renderItem={({item}) => (
          <RestaurantItem restaurant={item} listType={listType} />
        )}
        key={listType}
        numColumns={listType === 'list' ? 1 : 2}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScreenContainer>
  );
};

export default LandingScreen;
