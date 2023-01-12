import Body from '@components/Body';
import Container from '@components/Container';
import Footer from '@components/Footer';
import HeaderButton from '@components/Header/HeaderButton';
import { ItemList } from '@components/Item';
import { useNavigation } from '@react-navigation/native';
import { Button, SearchBar, Skeleton } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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
          onPress={() => console.log('Right button pressed')}
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
        {/* <FlatList
          data={DATA}
          style={styles.flatList}
          renderItem={({ item }) => (
            <ItemCard
              data={item}
              Component={TouchableHighlight}
              containerStyle={[
                styles.container,
                item.header === search && styles.highLight,
              ]}
              onPress={() => setSearch(item.header)}
            />
          )}
          keyExtractor={(item) => item.header}
          extraData={search}
        /> */}
        <ScrollView>
          {DATA.map((item) => (
            <ItemList
              data={item}
              containerStyle={styles.itemContainer}
              key={item.header}
            />
          ))}
          <Skeleton height={240} />
        </ScrollView>
      </Body>
      <Footer>
        <Button
          title="Press"
          color=""
          onPress={() =>
            navigation.navigate('Settings', {
              title: 'HELLO',
            })
          }
        />
      </Footer>
    </Container>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  itemContainer: { paddingHorizontal: 0 },
  flatList: { marginBottom: 10, flexGrow: 0 },
  container: { alignItems: 'flex-start', paddingBottom: 0 },
  highLight: { backgroundColor: 'gray' },
});
