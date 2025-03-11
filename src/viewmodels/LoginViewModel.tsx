import { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { DefaultNavigationProps } from '../navigation/navigation';

type LoginProps = DefaultNavigationProps<'LoginScreen'>;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const useLoginViewModel = () => {
  const navigation = useNavigation<LoginProps['navigation']>();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    isValid: false,
  });

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.email, formState.password]);

  const updateFormState = (field: string, value: any) =>
    setFormState(prev => ({...prev, [field]: value}));

  const handleLogin = useCallback(() => {
    if (formState.isValid) {
      navigation.navigate('UserListScreen');
    }
  }, [formState.isValid, navigation]);

  const validateForm = () => {
    let emailValid = emailRegex.test(formState.email);
    let passwordValid = formState.password.length >= 6;

    updateFormState('emailError', emailValid ? '' : 'อีเมลไม่ถูกต้อง');
    updateFormState(
      'passwordError',
      passwordValid ? '' : 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
    );
    updateFormState('isValid', emailValid && passwordValid);
  };

  return {
    formState,
    updateFormState,
    handleLogin,
  };
};

export default useLoginViewModel;
