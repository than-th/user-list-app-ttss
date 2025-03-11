import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import UserListScreen from '../screens/UserListScreen';
import { RootStackParamList } from './navigation';
import { navigationRef } from './navigationRef';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <NavigationContainer ref={navigationRef}>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="UserListScreen" component={UserListScreen}/>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default RootRoute;
