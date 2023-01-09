import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 16, backgroundColor: 'white'},
});
