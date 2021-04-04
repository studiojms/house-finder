import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, HouseDetailScreen } from '../screens';
import SplashScreen from '../screens/SplashScreen';

export const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HouseDetail" component={HouseDetailScreen} />
    </Stack.Navigator>
  );
};
