import {AxiosError, AxiosResponse} from 'axios';
import axios from './_axios';
import Config from 'react-native-config';
const baseUrl = Config.BASE_URL;

export const getRestaurants = async (
  callback: (response: AxiosResponse | AxiosError) => {},
) => {
  const token =
    'Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx';
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json;',
  };
  await axios
    .get(baseUrl + 'search', {
      params: {
        location: 'san jose',
        limit: 50,
      },
      headers,
    })
    .then(response => {
      // console.log('data => ', response.data);
      return callback(response);
    })
    .catch(error => {
      console.log('error => ', error?.response?.data || error);
      return callback(error);
    });
};
