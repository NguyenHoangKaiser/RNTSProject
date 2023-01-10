import { StyleSheet, SafeAreaView, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Container = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: 'white' },
});
