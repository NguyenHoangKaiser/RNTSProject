import HeaderButton from '@components/Header/HeaderButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../../screens/SettingScreen';
import { BottomTabNavigatorParamList } from '../types';
import DetailScreen from '@screens/DetailScreen';
import FeedScreen from '@screens/FeedScreen';
import { FONT } from '@config';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: FONT.SEMI,
        },
        headerTitleAlign: 'center',
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        headerShadowVisible: false,
        tabBarShowLabel: false,
        headerLeft: () => <HeaderButton title="Back" />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ios-information-circle';
          switch (route.name) {
            case 'Detail':
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              break;
            case 'Settings':
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            case 'Feed':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            default:
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        initialParams={{ name: 'Default' }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        initialParams={{ title: 'Default' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{ title: 'Default' }} // default parameters before navigation
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
