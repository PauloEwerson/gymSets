import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export async function storageAuthTokenSave(token: string) {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
  } catch (error) {
    console.log('Error saving token on storage');
  }
}