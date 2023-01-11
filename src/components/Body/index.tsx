import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Body = ({ children, style }: Props) => {
  return <View style={[styles.body, style]}>{children}</View>;
};

export default Body;

const styles = StyleSheet.create({ body: { flex: 1 } });
