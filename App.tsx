import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import RootNavigator from '@navigators';
import { theme } from '@config';
import store from '@reduxCore/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
