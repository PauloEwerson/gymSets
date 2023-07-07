import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export async function storageAuthTokenSave(token: string) {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
  } catch (error) {
    console.log('Error saving token on storage');
  }
}

export async function storageAuthTokenGet() {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
    return token;
  } catch (error) {
    console.log('Error getting token on storage');
  }
}