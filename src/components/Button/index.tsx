import { COLORS } from '@config';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  bgColor?: string;
  onPress?: () => void;
};

const CustomButton = ({ title, bgColor, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: bgColor === '' ? COLORS.PRIMARY : bgColor },
      ]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
