import type {
  // BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type {
  // CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  // RouteProp,
} from '@react-navigation/native';
import type {
  // NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

/**
 * The root stack param list type.
 */
export type RootStackParamList = {
  Home: NavigatorScreenParams<BottomTabNavigatorParamList>;
  Login: undefined;
  SignUp: undefined;
  NotFound: undefined;
  // Setting: { title: string };
};

/**
 * Use this to type screen props of StackNavigator, faster than use individual types
 * @example const route = useRoute<CustomStackScreenProps<'Setting'>['route']>();
 */
export type CustomStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * The bottom tab navigator param list type.
 */
export type BottomTabNavigatorParamList = {
  Detail: { title: string };
  Settings: { title: string };
  Feed: { name: string };
  Profile: undefined;
};

/**
 * Use this to type screen props of StackNavigator to BottomTabNavigator
 * @param T route to go from RootStackNavigator
 * @example const navigation = useNavigation<ComposeScreenProps<'Login'>['navigation']>();
 */
export type ComposeScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, T>,
    BottomTabScreenProps<BottomTabNavigatorParamList>
  >;

/**
 * Use this to type screen props of nested BottomTabNavigator inside StackNavigator
 * @param T route name of the screen in BottomTabNavigator
 * @example const route = useRoute<HomeTabScreenProps<'Settings'>['route']>();
 */
export type HomeTabScreenProps<T extends keyof BottomTabNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabNavigatorParamList, T>,
    CustomStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/**
 * Use this to type navigation of StackNavigator
 * @example const navigation = useNavigation<CustomScreenNavigationProp<'Feed'>>();
 */
// export type CustomScreenNavigationProp<T extends keyof RootStackParamList> =
//   NativeStackNavigationProp<RootStackParamList, T>;

/**
 * Use this to type route of StackNavigator
 * @example const route = useRoute<CustomScreenRouteProp<'Feed'>>();
 */
// export type CustomScreenRouteProp<T extends keyof RootStackParamList> =
//   RouteProp<RootStackParamList, T>;

/** Use this to type navigation of StackNavigator to BottomTabNavigator
 * @param T route to go from RootStackNavigator
 * @example const navigation = useNavigation<ComposeScreenNavigationProp<'Login'>>();
 */
// export type ComposeScreenNavigationProp<T extends keyof RootStackParamList> =
//   CompositeNavigationProp<
//     NativeStackNavigationProp<RootStackParamList, T>,
//     BottomTabNavigationProp<BottomTabNavigatorParamList>
//   >;
