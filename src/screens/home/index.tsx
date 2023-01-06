import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from 'src/navigators/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '@components/Input';
import {Button} from '@rneui/themed';

// type Props = {};

const HomeScreen = ({navigation, _route}: RootStackScreenProps<'Home'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.header}>Login</Text>
        <InputField
          label="Email ID"
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={styles.icon}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label="Password"
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={styles.icon}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />
        <View>
          <Button
            title="Go to Feed"
            onPress={() => navigation.navigate('Feed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {marginRight: 5, paddingTop: 3},
  view: {
    paddingHorizontal: 25,
  },
  textInput: {flex: 1, paddingVertical: 0},
  input: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  header: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  container: {flex: 1, justifyContent: 'center'},
});
