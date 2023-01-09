import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Header = ({children}: Props) => {
  return <View style={styles.header}>{children}</View>;
};

export default Header;

const styles = StyleSheet.create({header: {flex: 1}});
