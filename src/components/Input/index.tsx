import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {COLORS, FONT} from '@config';

type InputFieldProps = {
  label: string;
  icon?: any;
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
  secure?: boolean;
  fieldButtonFunction?: () => void;
} & TextInputProps;

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  secure,
  fieldButtonFunction,
  ...otherProps
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      {icon ? icon : null}
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
          secureTextEntry={secure}
          {...otherProps}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
          {...otherProps}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.textLabel}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    color: COLORS.PRIMARY,
    fontWeight: '700',
    fontFamily: FONT.MEDIUM,
    paddingRight: 6,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 25,
    minHeight: 50,
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.GRAY_BORDER,
    borderRadius: 8,
  },
});
