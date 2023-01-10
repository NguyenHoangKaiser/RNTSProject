import HeaderButton from '@components/Header/HeaderButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeTabScreenProps } from 'src/navigators/types';

const DetailScreen = () => {
  const route = useRoute<HomeTabScreenProps<'Settings'>['route']>();
  const navigation =
    useNavigation<HomeTabScreenProps<'Settings'>['navigation']>();
  const { title } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Detail Screen {title}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  text: { fontSize: 18 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
