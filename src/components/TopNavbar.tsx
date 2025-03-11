import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import { Text } from './CustomText';

interface TopNavbarProps {
  title: string;
}

const TopNavbar: React.FC<TopNavbarProps> = ({title}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.navbarContainer}>
      <Text style={[styles.title, sharedStyle.fontBold]}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
});

export default TopNavbar;
