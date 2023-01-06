import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS} from '@config';

type Props = {
  title: string;
  bgColor?: string;
  onPress?: () => void;
};

const CustomButton = ({title, bgColor, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: bgColor === '' ? COLORS.BUTTON : bgColor},
      ]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
