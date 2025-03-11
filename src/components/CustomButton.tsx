import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import { Text } from './CustomText';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
}) => {
  const buttonStyles = !disabled
    ? tw`h-13 bg-[${Colors.primary}] justify-center items-center rounded-lg w-full`
    : tw`h-13 bg-[${Colors.lightGray}] justify-center items-center rounded-lg w-full`;

  const textStyles = !disabled
    ? tw`text-base text-white`
    : tw`text-base text-[${Colors.gray}]`;

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[textStyles, sharedStyle.fontBold]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
