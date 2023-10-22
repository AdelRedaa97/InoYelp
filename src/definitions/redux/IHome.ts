export type TListType = 'list' | 'grid';

export interface IRestaurant {
  alias: string;
  categories: string[];
  coordinates: {latitude: number; longitude: number};
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: {
    address1: string;
    address2: string | null;
    address3: string | null;
    city: string;
    zip_code: string;
    country: string;
    state: string;
  };
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: string[];
  url: string;
}

export interface IHomeReducer {
  processing: Boolean;
  listType: TListType;
  restaurants: IRestaurant[];
}

export type THomeAction = ISetHomeProcessing | ISetListType | ISetRestaurants;

export interface ISetHomeProcessing {
  type: 'HOMEACTIONS_SET_PROCESSING';
  payload: {
    processing: Boolean;
  };
}

export interface ISetListType {
  type: 'HOMEACTIONS_SET_LIST_TYPE';
  payload: {
    listType: TListType;
  };
}

export interface ISetRestaurants {
  type: 'HOMEACTIONS_SET_RESTAURANTS';
  payload: {
    restaurants: IRestaurant[];
  };
}
