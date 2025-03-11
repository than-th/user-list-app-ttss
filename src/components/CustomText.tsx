import React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { Colors } from '../shared/style/Colors';

export const Text: React.FC<TextProps> = props => {
  return (
    <RNText
      style={[styles.defaultText, props.style]}
      onPress={props.onPress}
      suppressHighlighting>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: Colors.default,
    fontFamily: 'IBMPlexSansThai-Medium',
  },
});
