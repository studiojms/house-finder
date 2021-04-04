import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@HouseFinder:Favorites';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error({ error });
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    console.error({ error });
  }
};

export const saveHouseAsFavorite = async houseId => {
  const favorites = await getData(FAVORITE_KEY);

  let favoritesArray = [];

  if (favorites) {
    favoritesArray = JSON.parse(favorites);
  }
  favoritesArray.push(houseId);

  await saveData(FAVORITE_KEY, JSON.stringify(favoritesArray));
};

export const removeHouseAsFavorite = async houseId => {
  const favorites = await getData(FAVORITE_KEY);

  if (favorites) {
    const favoritesArray = JSON.parse(favorites);
    const newData = favoritesArray.filter(house => house !== houseId);
    await saveData(FAVORITE_KEY, JSON.stringify(newData));
  }
};

export const checkIsHouseFavorite = async houseId => {
  const favorites = await getData(FAVORITE_KEY);

  const favoritesArray = JSON.parse(favorites);

  return (
    favoritesArray && favoritesArray.find(house => house === houseId) != null
  );
};
