import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox, Button as EButton, Icon } from '@rneui/themed';
import React, { useState } from 'react';
import Container from '@components/Container';
import Body from '@components/Body';
import Footer from '@components/Footer';
import { useNavigation } from '@react-navigation/native';
import { CustomStackScreenProps } from 'src/navigators/types';
import InputField from '@components/Input';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider,
} from 'react-hook-form';
import { COLORS, FONT } from '@config';
import HeaderButton from '@components/Header/HeaderButton';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignUpScreen = () => {
  const navigation =
    useNavigation<CustomStackScreenProps<'SignUp'>['navigation']>();
  const [secure, setSecure] = useState(true);
  const [checked, setChecked] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign Up',
      headerLeft: () => (
        <Icon
          name="close"
          color="#bdbdbd"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <HeaderButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      ),
    });
  }, [navigation]);

  const { ...methods } = useForm<FormValues>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // navigation.navigate('Feed', {name: data.email});
    console.log(data);
    navigation.replace('Login');
    methods.reset();
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, _e) => {
    return console.log(errors);
  };

  return (
    <Container>
      <Body style={styles.body}>
        <FormProvider {...methods}>
          <InputField
            name="name"
            rules={{
              required: 'Name is required!',
            }}
            placeholder="Name"
          />
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
            rules={{ required: 'Password is required!' }}
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
          <CheckBox
            iconType="material-community"
            checked={checked}
            onPress={() => setChecked(!checked)}
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor={COLORS.PRIMARY}
            textStyle={styles.checkBoxText}
            containerStyle={styles.checkBoxContainer}
            title="I agree to the terms and conditions"
          />
          {/* <CheckBox
            checkedIcon={
              <Icon
                name="checkbox-marked"
                type="material-community"
                color="green"
                size={25}
                iconStyle={{ marginRight: 10, borderRadius: 12 }}
              />
            }
            uncheckedIcon={
              <Icon
                name="checkbox-blank-outline"
                type="material-community"
                color="green"
                size={25}
                iconStyle={{ marginRight: 10, borderRadius: 12 }}
              />
            }
            onPress={() => setChecked(!checked)}
            checked={checked}
            title="I agree to the terms and conditions"
          /> */}
        </FormProvider>
      </Body>
      <Footer style={styles.footer}>
        <EButton
          title="Sign Up"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </Footer>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  checkBoxContainer: {
    marginLeft: -2,
    paddingLeft: 0,
  },
  checkBoxText: {
    fontSize: 14,
    fontFamily: FONT.MEDIUM,
    fontWeight: '400',
    color: COLORS.GRAY_TEXT,
  },
  footer: { marginBottom: 10 },
  body: {
    marginTop: 20,
  },
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
  buttonTitle: { fontWeight: 'bold', fontSize: 16 },
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
