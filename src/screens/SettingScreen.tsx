import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeTabScreenProps } from 'src/navigators/types';

const SettingsScreen = () => {
  const route = useRoute<HomeTabScreenProps<'Settings'>['route']>();
  const { title } = route.params;
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Settings Screen {title}</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  text: { fontSize: 18 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
