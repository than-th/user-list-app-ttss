import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import tw from 'twrnc';

import AppLogo from '../assets/svg/AppLogo';
import CustomButton from '../components/CustomButton';
import { Text } from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import DismissKeyboardWrapper from '../components/DismissKeyboardWrapper';
import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import useLoginViewModel from '../viewmodels/LoginViewModel';

const LoginPage: React.FC = () => {
  const {formState, updateFormState, handleLogin} = useLoginViewModel();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex : 1}}>
      <DismissKeyboardWrapper
        style={tw`flex-1 items-center justify-center bg-white px-6 gap-6`}>
        <AppLogo />
        <Text
          style={[
            tw`text-3xl my-4 text-[${Colors.primary}]`,
            sharedStyle.fontBold,
          ]}>
          {'ยินดีต้อนรับ'}
        </Text>
        <View style={tw`gap-1 w-full`}>
          <CustomTextInput
            leftIcon={'mail'}
            placeholder="อีเมล"
            value={formState.email}
            onChangeText={text => updateFormState('email', text)}
            errorText={formState.email.length > 0 ? formState.emailError : ''}
          />
          <CustomTextInput
            leftIcon={'lock-closed'}
            placeholder="รหัสผ่าน"
            value={formState.password}
            type="password"
            onChangeText={text => updateFormState('password', text)}
            errorText={
              formState.password.length > 0 ? formState.passwordError : ''
            }
          />
        </View>

        <CustomButton
          title="เข้าสู่ระบบ"
          onPress={handleLogin}
          disabled={!formState.isValid}
        />
      </DismissKeyboardWrapper>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
