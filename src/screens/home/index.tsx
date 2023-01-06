import {StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from 'src/navigators/types';
import React from 'react';

type TData = {
  id: number;
  name: string;
  birth_year: string;
};

const DATA: TData[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderListItems = ({item}: {item: TData}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            name: item.name,
            birthYear: item.birth_year,
          })
        }>
        <Text style={styles.text}>{item.name}</Text>
        <View style={styles.view} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Feed')}
        style={styles.press}>
        <Text style={styles.textPress}>Go to Feed screen</Text>
      </Pressable>
      <FlatList data={DATA} renderItem={renderListItems} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10},
  text: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'Roboto-Bold',
  },
  view: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  press: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,

    borderColor: 'red',
    margin: 12,
    alignItems: 'center',
  },
  textPress: {fontSize: 16, fontFamily: 'Roboto-Italic', fontWeight: '600'},
});
