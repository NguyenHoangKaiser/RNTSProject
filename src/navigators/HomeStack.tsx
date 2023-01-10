import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import HomeScreen from '@screens/home';
import FeedScreen from '@screens/FeedScreen';
// import DetailsScreen from '@screens/details';
import HeaderButton from '@components/Header/HeaderButton';
import SignUpScreen from '@screens/auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // title: 'Feed', //Set Header Title
        // headerStyle: {
        //   backgroundColor: COLORS.PRIMARY, //Set Header color
        // },
        // headerTintColor: 'black', //Set Header tint color
        headerTitleStyle: {
          // fontWeight: 'bold', //Set Header text style
          // color: 'green',
          fontSize: 26,
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerLeft: () => <HeaderButton title="Back" />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
