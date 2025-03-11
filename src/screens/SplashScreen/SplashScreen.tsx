import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import AppLogo from '../../assets/svg/AppLogo';

export default function SplashScreen() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View
        style={tw`flex-1 items-center justify-center bg-white w-full h-full`}>
        <AppLogo />
      </View>
    </>
  );
}
