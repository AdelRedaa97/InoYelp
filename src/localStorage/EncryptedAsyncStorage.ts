import CryptoJS from 'react-native-crypto-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  getItem: async (key: string) => {
    return await AsyncStorage.getItem(key).then(async serializedState => {
      if (serializedState === null || serializedState === undefined) {
        return undefined;
      } else {
        try {
          const encryptionKey = 'encryptionKey';
          const bytes = CryptoJS.AES.decrypt(serializedState, encryptionKey);
          const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          return decryptedData;
        } catch (error) {
          await AsyncStorage.removeItem(key);
          return undefined;
        }
      }
    });
  },

  setItem: async (key: string, value: any) => {
    const encryptionKey = 'encryptionKey';
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      encryptionKey,
    );
    return await AsyncStorage.setItem(key, encryptedData.toString());
  },

  removeItem: async (key: string) => {
    return await AsyncStorage.removeItem(key);
  },

  getAllKeys: async () => {
    return await AsyncStorage.getAllKeys();
  },
};
