import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import Icon from '@react-native-vector-icons/ionicons';

import { Colors } from '../shared/style/Colors';
import { Text } from './CustomText';

interface CustomTextInputProps extends TextInputProps {
  type?: string;
  errorText?: string;
  leftIcon?: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  type,
  errorText,
  leftIcon,
  value,
  placeholder,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const animatedLabelPosition = useRef(
    new Animated.Value(value ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.timing(animatedLabelPosition, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedLabelPosition, isFocused, value]);

  const labelStyle = {
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 4],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.default, Colors.default],
    }),
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {borderColor: errorText !== '' ? Colors.error : Colors.secondary},
        ]}>
        {leftIcon && (
          <Icon name={leftIcon} size={24} color="gray" style={styles.icon} />
        )}
        <View style={styles.inputContainer}>
          <Animated.Text style={[styles.label, labelStyle]}>
            {placeholder}
          </Animated.Text>
          <TextInput
            {...props}
            value={value}
            style={styles.input}
            secureTextEntry={type === 'password'}
            onFocus={event => {
              setIsFocused(true);
              onFocus && onFocus(event);
            }}
            onBlur={event => {
              setIsFocused(false);
              onBlur && onBlur(event);
            }}
            placeholder=""
            placeholderTextColor="transparent"
            selectionColor={Colors.primary}
          />
        </View>
      </View>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    paddingLeft: 4,
  },
  label: {
    position: 'absolute',
    left: 0,
    fontFamily: 'IBMPlexSansThai-Medium',
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'IBMPlexSansThai-Medium',
    marginTop: 8,
    color: Colors.default,
    paddingBottom: 0,
  },
  errorText: {
    paddingLeft: 8,
    color: Colors.error,
  },
  icon: {
    marginLeft: 8,
  },
});

export default CustomTextInput;
