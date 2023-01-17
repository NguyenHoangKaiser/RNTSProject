import Body from '@components/Body';
import Container from '@components/Container';
import { COLORS, FONT } from '@config';
import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import moment, { Moment } from 'moment';

const ProfileScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(
    null,
  );
  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : moment().format('YYYY-MM-DD').toString();
  return (
    <>
      <View style={styles.headerBackground} />
      <Container>
        <Body>
          <CalendarPicker
            enableDateChange={false}
            startFromMonday
            allowRangeSelection
            showDayStragglers
            todayBackgroundColor="transparent"
            todayTextStyle={{
              color: COLORS.PRIMARY,
            }}
            selectedDayColor={COLORS.PRIMARY}
            dayLabelsWrapper={styles.labelsWrapper}
            textStyle={styles.text}
            headerWrapperStyle={{
              backgroundColor: COLORS.PRIMARY,
            }}
            onDateChange={setSelectedStartDate}
            monthTitleStyle={styles.dateTitle}
            yearTitleStyle={styles.dateTitle}
            previousTitleStyle={styles.title}
            nextTitleStyle={styles.title}
          />
          <Text>{startDate}</Text>
        </Body>
      </Container>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  dateTitle: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    color: 'transparent',
  },
  text: {
    fontFamily: FONT.MEDIUM,
    fontSize: 16,
  },
  labelsWrapper: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor: COLORS.PRIMARY,
  },
  headerBackground: {
    backgroundColor: COLORS.PRIMARY,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
