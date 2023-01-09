import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import BottomTabs from './Tab';
// import HomeStackNavigator from './HomeStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
