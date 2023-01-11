import { StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Button, Icon, Text } from '@rneui/themed';
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
  Controller,
} from 'react-hook-form';
import { COLORS } from '@config';
import HeaderButton from '@components/Header/HeaderButton';

type FormValues = {
  name: string;
  email: string;
  password: string;
  checkBox: boolean;
};

const SignUpScreen = () => {
  const navigation =
    useNavigation<CustomStackScreenProps<'SignUp'>['navigation']>();
  const [secure, setSecure] = useState(true);

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

  const { ...methods } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { checkBox: false },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
          <Controller
            control={methods.control}
            name="checkBox"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                checked={value}
                onPress={() => onChange(!value)}
                containerStyle={styles.checkBoxContainer}
                title="I would like to receive your newsletter and other promotional information."
              />
            )}
          />
        </FormProvider>
      </Body>
      <Footer>
        <Button
          title="Sign Up"
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </Footer>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  footer: { marginBottom: 55 },
  checkBoxContainer: {
    marginLeft: -2,
    paddingLeft: 0,
  },
  body: {
    marginTop: 20,
  },
  textIcon: {
    color: COLORS.PRIMARY,
    paddingRight: 6,
  },
});
