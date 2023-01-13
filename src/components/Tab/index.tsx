import React, { SetStateAction } from 'react';
import { Tab, TabView } from '@rneui/themed';
import { COLORS, FONT } from '@config';
import { View, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  activeValue: number;
  setActiveValue: React.Dispatch<SetStateAction<number>>;
  indicatorTitle: string[];
  style?: ViewStyle;
  children: React.ReactNode;
};

const CustomTab = ({
  activeValue,
  setActiveValue,
  indicatorTitle,
  style,
  children,
}: Props) => {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.tabContainerView}>
        <Tab
          value={activeValue}
          onChange={(e) => setActiveValue(e)}
          buttonStyle={styles.tabButton}
          containerStyle={(active) =>
            active ? styles.activeContainer : styles.inActiveContainer
          }
          indicatorStyle={styles.tabIndicator}>
          {indicatorTitle.map((title, index) => (
            <Tab.Item title={title} titleStyle={styles.tabTitle} key={index} />
          ))}
        </Tab>
      </View>
      <TabView
        value={activeValue}
        onChange={setActiveValue}
        animationType="spring">
        {children}
      </TabView>
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.GRAY_BG_INPUT,
  },
  inActiveContainer: {
    backgroundColor: COLORS.GRAY_BG_INPUT,
    borderWidth: 2,
    borderTopWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.GRAY_BG_INPUT,
  },
  container: { width: '100%', height: '100%' },
  tabButton: { height: 50 },
  tabTitle: {
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
    textAlign: 'center',
    paddingVertical: 0,
    color: COLORS.PRIMARY,
  },
  tabIndicator: {
    height: 0,
  },
  tabContainerView: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_BG_INPUT,
    borderRadius: 30,
    backgroundColor: COLORS.GRAY_BG_INPUT,
  },
});
