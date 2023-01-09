import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Body = ({children}: Props) => {
  return <View style={styles.body}>{children}</View>;
};

export default Body;

const styles = StyleSheet.create({body: {flex: 1}});
