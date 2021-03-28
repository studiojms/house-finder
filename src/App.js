import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
// import Storybook from '../storybook';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
// next -> https://www.youtube.com/watch?v=XJomidgKHH4
