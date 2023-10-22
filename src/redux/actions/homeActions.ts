import {getRestaurants} from '../../service/restaurants';
import {AppDispatch, RootState} from '../store/store';
import {
  HOMEACTIONS_SET_LIST_TYPE,
  HOMEACTIONS_SET_PROCESSING,
  HOMEACTIONS_SET_RESTAURANTS,
} from '../types';

export const homescreen_toggleListType = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const listTypeSaved = getState().homeReducer.listType;
    dispatch({
      type: HOMEACTIONS_SET_LIST_TYPE,
      payload: {listType: listTypeSaved === 'list' ? 'grid' : 'list'},
    });
  };
};

export const homescreen_getResaurants = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: HOMEACTIONS_SET_PROCESSING,
      payload: {processing: true},
    });
    getRestaurants((response: any) => {
      dispatch({
        type: HOMEACTIONS_SET_PROCESSING,
        payload: {processing: false},
      });
      if (response.data) {
        dispatch({
          type: HOMEACTIONS_SET_RESTAURANTS,
          payload: {restaurants: response.data.businesses},
        });
      } else {
        console.log(response);
      }
    });
  };
};
