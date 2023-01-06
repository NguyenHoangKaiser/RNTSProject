import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  Home: undefined;
  Details: {
    name?: string;
    birthYear?: string;
  };
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>;

export type DetailsScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Details'
>;

export type BottomTabNavigatorParamList = {
  HomeStack: StackNavigatorParamList;
  Feed: undefined;
  Settings: undefined;
};
