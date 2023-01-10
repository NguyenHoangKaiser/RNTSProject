import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Footer = ({children}: Props) => {
  return <View style={styles.footer}>{children}</View>;
};

export default Footer;

const styles = StyleSheet.create({footer: {flexShrink: 0, marginBottom: 10}});
