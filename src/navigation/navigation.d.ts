type RootStackParamList = {
  LoginScreen: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
