import React from 'react';
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form';
import { Input, InputProps } from '@rneui/themed';

type InputFieldProps = Omit<InputProps, 'ref'> & UseControllerProps;

const ControlledInput = (props: InputFieldProps) => {
  const formContext = useFormContext();
  const { errors } = formContext.formState;
  const { name, ...otherProps } = props;
  const { field } = useController(props);

  return (
    <Input
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      errorMessage={errors[name]?.message as string}
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
