import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomTabNavigatorParamList} from '../types';
import HomeStackNavigator from '../HomeStack';
import SettingsScreen from '../../screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderButton from '@components/Header/HeaderButton';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleStyle: {
          fontSize: 26,
        },
        headerTitleAlign: 'center',
        tabBarButton: props => <TouchableOpacity {...props} />,
        headerShadowVisible: false,
        tabBarShowLabel: false,
        headerLeft: () => <HeaderButton title="Back" />,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'ios-information-circle';

          if (route.name === 'HomeStack') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{title: 'Default'}} // default parameters before navigation
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
