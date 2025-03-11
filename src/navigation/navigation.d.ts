type RootStackParamList = {
  LoginScreen: undefined;
  UserListScreen: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
