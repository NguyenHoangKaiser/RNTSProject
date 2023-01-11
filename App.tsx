import { theme } from '@config';
import RootNavigator from '@navigators';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
