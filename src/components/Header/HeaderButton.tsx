import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { COLORS, FONT } from '@config';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  onPress?: TouchableOpacityProps['onPress'];
} & TouchableOpacityProps;

const HeaderButton = ({ title, onPress, ...otherProps }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : navigation.canGoBack()
          ? navigation.goBack
          : () => Alert.alert('Cannot go back')
      }
      style={onPress ? styles.containerRight : styles.containerLeft}
      {...otherProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  text: { color: COLORS.PRIMARY, fontSize: 16, fontFamily: FONT.MEDIUM },
  containerRight: { marginRight: 16 },
  containerLeft: { marginLeft: 16 },
});
