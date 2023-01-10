import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@screens/auth/LoginScreen';
import { RootStackParamList } from './types';
// import DetailsScreen from '@screens/details';
import HeaderButton from '@components/Header/HeaderButton';
import SignUpScreen from '@screens/auth';
import BottomTabs from './Tab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
