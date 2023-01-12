import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/auth/LoginScreen';
import { RootStackParamList } from './types';
import HeaderButton from '@components/Header/HeaderButton';
import SignUpScreen from '@screens/auth/SignUpScreen';
import { FONT } from '@config';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: FONT.SEMI,
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
