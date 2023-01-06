import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import HomeScreen from '@screens/home';
import FeedScreen from '@screens/FeedScreen';
// import DetailsScreen from '@screens/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
