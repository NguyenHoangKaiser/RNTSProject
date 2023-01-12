import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { HomeTabScreenProps } from 'src/navigators/types';
import HeaderButton from '@components/Header/HeaderButton';
import Container from '@components/Container';
import Body from '@components/Body';
import { COLORS } from '@config';

const SettingsScreen = () => {
  const navigation =
    useNavigation<HomeTabScreenProps<'Settings'>['navigation']>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: COLORS.PRIMARY },
      headerLeft: () => (
        <HeaderButton title="Back" textStyle={styles.headerText} />
      ),
      headerRight: () => (
        <HeaderButton
          title="Logout"
          textStyle={styles.headerText}
          onPress={() => navigation.navigate('Login')}
        />
      ),
    });
  }, [navigation]);
  return (
    <Container>
      <Body>
        <Text style={styles.text}>Settings Screen</Text>
      </Body>
    </Container>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerText: { color: 'white' },
  text: { fontSize: 18 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
