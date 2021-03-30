import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
// import Storybook from '../storybook';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
