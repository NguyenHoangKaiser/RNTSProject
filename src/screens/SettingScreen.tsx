import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  text: {fontSize: 18},
  view: {flex: 1, paddingTop: 12, paddingHorizontal: 10},
});
