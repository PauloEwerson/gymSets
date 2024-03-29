import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export async function storageAuthTokenSave({ token, refresh_token }: StorageAuthTokenProps) {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify({ token, refresh_token }));
  } catch (error) {
    console.log('Error saving token on storage');
  }
}

export async function storageAuthTokenGet() {
  try {
    const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

    const { token, refresh_token }: StorageAuthTokenProps = response ? JSON.parse(response) : {};

    return { token, refresh_token };
  } catch (error) {
    console.log('Error getting token on storage');
  }
}

export async function storageAuthTokenRemove() {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
  } catch (error) {
    console.log('Error removing token on storage');
  }
}