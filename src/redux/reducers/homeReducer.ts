import {
  HOMEACTIONS_SET_LIST_TYPE,
  HOMEACTIONS_SET_PROCESSING,
  HOMEACTIONS_SET_RESTAURANTS,
} from '../types';
import {IHomeReducer, THomeAction} from '../../definitions/redux/IHome';

const initialState: IHomeReducer = {
  processing: false,
  listType: 'list',
  restaurants: [],
};

export default (state = initialState, action: THomeAction) => {
  switch (action.type) {
    case HOMEACTIONS_SET_PROCESSING:
      return {
        ...state,
        processing: action.payload.processing,
      };

    case HOMEACTIONS_SET_LIST_TYPE:
      return {
        ...state,
        listType: action.payload.listType,
      };

    case HOMEACTIONS_SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };

    default:
      return state;
  }
};
