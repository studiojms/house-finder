import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './styles/theme';
import { Navigator } from './routes';
// import Storybook from '../storybook';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
