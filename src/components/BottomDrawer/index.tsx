import { COLORS } from '@config';
import { BottomSheet, BottomSheetProps } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
} & BottomSheetProps;

const BottomDrawer: React.FC<Props> = ({
  children,
  setVisible: setIsVisible,
  ...otherProps
}) => {
  return (
    <SafeAreaProvider>
      <BottomSheet onBackdropPress={() => setIsVisible(false)} {...otherProps}>
        <View style={styles.bottomDrawerContainer}>
          <View style={styles.bottomDrawerIcon} />
          {children}
        </View>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  bottomDrawerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
  },
  bottomDrawerIcon: {
    height: 5,
    width: 50,
    backgroundColor: COLORS.GRAY_BG_INPUT,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
