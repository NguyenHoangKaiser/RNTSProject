import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CustomScreenNavigationProp} from 'src/navigators/types';
import Body from '@components/Body';
import Container from '@components/Container';
import Footer from '@components/Footer';
import InputField from '@components/Input';
import {COLORS, FONT} from '@config';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

const HomeScreen = () => {
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation<CustomScreenNavigationProp<'Feed'>>();

  const {...methods} = useForm<FormValues>({mode: 'onChange'});
  const onSubmit: SubmitHandler<FormValues> = data => {
    navigation.navigate('Feed', {name: data.email});
    methods.reset();
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, _e) => {
    return console.log(errors);
  };

  return (
    <Container>
      <Body>
        <FormProvider {...methods}>
          <Text style={styles.title}>Login</Text>
          <InputField
            name="email"
            rules={{
              required: 'Email is required!',
              pattern: {
                value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                message: 'Must be formatted: john.doe@email.com',
              },
            }}
            placeholder="Email"
            keyboardType="email-address"
          />
          <InputField
            placeholder="Password"
            name="password"
            secureTextEntry={secure}
            rules={{required: 'Password is required!'}}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  setSecure(!secure);
                }}>
                <Text style={styles.textIcon}>
                  {secure ? 'Show' : 'Hidden'}
                </Text>
              </TouchableOpacity>
            }
          />
        </FormProvider>
      </Body>
      <Footer>
        <Button
          title="Log In"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Feed', {
              name: 'Bro',
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
  textIcon: {
    color: COLORS.PRIMARY,
    fontWeight: '700',
    fontFamily: FONT.MEDIUM,
    paddingRight: 6,
    fontSize: 16,
  },
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
