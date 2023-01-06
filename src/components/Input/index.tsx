import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

type InputFieldProps = {
  label: string;
  icon: any;
  inputType?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'visible-password'
    | 'email-address'
    | 'phone-pad';
  fieldButtonLabel?: string;
  fieldButtonFunction?: () => void;
};

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      {icon}
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.text}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {color: '#AD40AF', fontWeight: '700'},
  textInput: {flex: 1, paddingVertical: 0},
  container: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});
