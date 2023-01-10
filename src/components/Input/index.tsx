import React from 'react';
import {StyleSheet} from 'react-native';
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form';
import {Input, InputProps} from '@rneui/themed';
import {COLORS, FONT} from '@config';

type InputFieldProps = Omit<InputProps, 'ref'> & UseControllerProps;

const ControlledInput = (props: InputFieldProps) => {
  const formContext = useFormContext();
  const {errors} = formContext.formState;
  const {name, ...otherProps} = props;
  const {field} = useController(props);

  return (
    <Input
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
      inputStyle={styles.input}
      errorMessage={errors[name]?.message as string}
      errorStyle={{fontFamily: FONT.MEDIUM}}
      {...otherProps}
    />
  );
};

export default function InputField(props: InputFieldProps) {
  const formContext = useFormContext();

  if (!formContext || !props.name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }

  return <ControlledInput {...props} />;
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 0, marginBottom: 4},
  input: {
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
  },
  inputContainer: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.GRAY_BORDER,
    borderRadius: 8,
    paddingHorizontal: 4,
  },
});
