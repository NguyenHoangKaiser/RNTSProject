import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CustomScreenNavigationProp} from 'src/navigators/types';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Body from '@components/Body';
import Container from '@components/Container';
import Footer from '@components/Footer';
import InputField from '@components/Input';
import {COLORS, FONT} from '@config';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';

const HomeScreen = () => {
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation<CustomScreenNavigationProp<'Feed'>>();
  return (
    <Container>
      <Body>
        <Text style={styles.title}>Login</Text>
        <InputField label="Email" keyboardType="email-address" />
        <InputField
          label="Password"
          secure={secure}
          inputType="password"
          fieldButtonLabel={secure ? 'Show' : 'Hidden'}
          fieldButtonFunction={() => {
            setSecure(!secure);
          }}
        />
      </Body>
      <Footer>
        <Button
          title="Log In"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() =>
            navigation.navigate('Feed', {
              name: 'Bruh',
            })
          }
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Feed', {
              name: 'bruh',
            })
          }>
          <Text style={styles.textForgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textForgot: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontFamily: FONT.BOLD,
    marginTop: 16,
  },
  buttonTitle: {fontWeight: 'bold', fontSize: 16},
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
  },
  title: {
    fontFamily: FONT.MEDIUM,
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    marginBottom: 30,
    marginTop: 15,
    textAlign: 'center',
  },
});
