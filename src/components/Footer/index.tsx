import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Footer = ({ children, style }: Props) => {
  return <View style={[style, styles.footer]}>{children}</View>;
};

export default Footer;

const styles = StyleSheet.create({
  footer: { flexShrink: 0 },
});
