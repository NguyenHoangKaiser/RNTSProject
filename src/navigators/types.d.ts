import type {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  RouteProp,
} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

/**
 * The root stack param list type.
 */
export type RootStackParamList = {
  Home: undefined;
  Feed: { name: string };
  SignUp: undefined;
  NotFound: undefined;
  Setting: { title: string };
};

// export type CustomScreenProps<T extends keyof RootStackParamList> = {
//   navigation: CustomScreenNavigationProp<T>;
//   route: CustomScreenRouteProp<T>;
// };

/**
 * Use this to type screen props of StackNavigator, faster than use individual types
 * @example const route = useRoute<CustomStackScreenProps<'Setting'>['route']>();
 */
export type CustomStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * Use this to type navigation of StackNavigator
 * @example const navigation = useNavigation<CustomScreenNavigationProp<'Feed'>>();
 */
export type CustomScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

/**
 * Use this to type route of StackNavigator
 * @example const route = useRoute<CustomScreenRouteProp<'Feed'>>();
 */
export type CustomScreenRouteProp<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;

/**
 * The bottom tab navigator param list type.
 */
export type BottomTabNavigatorParamList = {
  HomeStack: RootStackParamList;
  Settings: { title: string };
};

/** Use this to type navigation of nested navigators.
 * @param T route to go from RootStackNavigator
 * @param P route to go to in BottomTabNavigator
 * @example const navigation = useNavigation<ComposeScreenNavigationProp<'Feed', 'Settings'>>();
 */
export type ComposeScreenNavigationProp<
  T extends keyof RootStackParamList,
  P extends keyof BottomTabNavigatorParamList,
> = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, T>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, P>
>;

//! This is not working
export type HomeTabScreenProps<T extends keyof BottomTabNavigatorParamList> =
  CompositeScreenProps<
    CustomStackScreenProps<keyof RootStackParamList>,
    BottomTabScreenProps<BottomTabNavigatorParamList, T>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

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

// export type CustomBottomNavigationProp<T extends keyof BottomTabNavigatorParamList, P extends keyof BottomTabNavigatorParamList> = {
//   BottomTabNavigationProp<BottomTabNavigatorParamList, P>;
// };

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

// export type HomeTabScreenProps<T extends keyof BottomTabNavigatorParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<BottomTabNavigatorParamList, T>,
//     NativeStackScreenProps<keyof RootStackParamList>
//   >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
