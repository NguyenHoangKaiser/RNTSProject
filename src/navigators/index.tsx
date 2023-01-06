import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import BottomTabs from './Tab';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;
