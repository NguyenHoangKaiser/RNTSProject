import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackNavigatorParamList} from './types';
import HomeScreen from '@screens/home';
import DetailsScreen from '@screens/details';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
