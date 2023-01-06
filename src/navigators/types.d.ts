// import type {
//   CompositeNavigationProp,
//   RouteProp,
// } from '@react-navigation/native';
// import type {
//   NativeStackNavigationProp,
//   NativeStackScreenProps,
// } from '@react-navigation/native-stack';

// export type StackNavigatorParamList = {
//   Home: undefined;
//   Details: {
//     name: string;
//     birthYear: string;
//   };
// };

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<StackNavigatorParamList, 'Details'>,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
// >;

// export type DetailsScreenRouteProp = RouteProp<
//   StackNavigatorParamList,
//   'Details'
// >;

// export type BottomTabNavigatorParamList = {
//   HomeStack: StackNavigatorParamList;
//   Feed: undefined;
//   Settings: undefined;
// };

// type HomeScreenProps = NativeStackScreenProps<
//   StackNavigatorParamList,
//   'Details'
// >;

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  Feed: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
