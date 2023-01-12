import Body from '@components/Body';
import Container from '@components/Container';
import HeaderButton from '@components/Header/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { HomeTabScreenProps } from 'src/navigators/types';
import { DATA } from './FeedScreen';
import { ItemCard } from '@components/Item';

const DetailScreen = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const navigation =
    useNavigation<HomeTabScreenProps<'Settings'>['navigation']>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Content',
      headerRight: () => (
        <HeaderButton
          title="Filter"
          onPress={() => navigation.navigate('Settings', { title: 'Settings' })}
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
        <FlatList
          data={DATA}
          overScrollMode="never"
          style={styles.flatList}
          renderItem={({ item }) => (
            <ItemCard
              data={item}
              Component={TouchableHighlight}
              containerStyle={[
                styles.container,
                // item.header === search && styles.highLight,
              ]}
              onPress={() => setSearch(item.header)}
            />
          )}
          keyExtractor={(item) => item.header}
          extraData={search}
        />
        {/* <ScrollView>
          {DATA.map((item) => (
            <ItemCard
              data={item}
              containerStyle={styles.itemContainer}
              key={item.header}
            />
          ))}
        </ScrollView> */}
      </Body>
    </Container>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  highLight: { backgroundColor: 'gray' },
  flatList: { marginBottom: 10, flexGrow: 0 },
  container: { padding: 0 },
  text: { fontSize: 18 },
  itemContainer: { marginBottom: 8, padding: 0 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
