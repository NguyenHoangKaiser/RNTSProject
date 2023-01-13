import Body from '@components/Body';
import Container from '@components/Container';
import HeaderButton from '@components/Header/HeaderButton';
import { ItemList } from '@components/Item';
import { useNavigation } from '@react-navigation/native';
import { SearchBar, Image } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { HomeTabScreenProps } from 'src/navigators/types';

export type ListData = {
  header: string;
  content: string;
};

export const DATA: ListData[] = [
  {
    header: '1',
    content: 'Michael Scott',
  },
  {
    header: '2',
    content: 'Jim Halpert',
  },
  {
    header: '3',
    content: 'Pam Beesly',
  },
  {
    header: '4',
    content: 'Dwight Schrute',
  },
  // {
  //   header: '5',
  //   content: 'Andy Bernard',
  // },
  // {
  //   header: '6',
  //   content: 'Ryan Howard',
  // },
  // {
  //   header: '7',
  //   content: 'Kelly Kapoor',
  // },
  // {
  //   header: '8',
  //   content: 'Toby Flenderson',
  // },
  // {
  //   header: '9',
  //   content: 'Stanley Hudson',
  // },
  // {
  //   header: '10',
  //   content: 'Phyllis Vance',
  // },
];

// const BASE_URI = 'https://source.unsplash.com/random?sig=';

const FeedScreen = () => {
  const navigation = useNavigation<HomeTabScreenProps<'Feed'>['navigation']>();
  const [search, setSearch] = useState('');

  const updateSearch = (searchText: string) => {
    setSearch(searchText);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          title="Filter"
          onPress={() =>
            navigation.navigate('Detail', {
              title: 'Detail',
            })
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Body>
        <SearchBar
          value={search}
          onChangeText={updateSearch}
          searchIcon={false}
        />

        <ScrollView
          overScrollMode="never"
          contentContainerStyle={styles.scrollView}>
          {DATA.map((item) => (
            <ItemList
              data={item}
              containerStyle={styles.itemContainer}
              key={item.header}
            />
          ))}
          <Image
            source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
            containerStyle={styles.item}
            PlaceholderContent={<ActivityIndicator style={styles.indicator} />}
          />
        </ScrollView>
      </Body>
    </Container>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  indicator: { height: '100%' },
  item: { height: 240, width: '100%' },
  scrollView: { paddingBottom: 10 },
  itemContainer: { paddingHorizontal: 0 },
  flatList: { marginBottom: 10, flexGrow: 0 },
  container: { alignItems: 'flex-start', paddingBottom: 0 },
  highLight: { backgroundColor: 'gray' },
});
