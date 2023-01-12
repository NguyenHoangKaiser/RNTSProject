import Body from '@components/Body';
import Container from '@components/Container';
import HeaderButton from '@components/Header/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HomeTabScreenProps } from 'src/navigators/types';
import { DATA } from './FeedScreen';
import { ItemCard } from '@components/Item';

const DetailScreen = () => {
  const navigation =
    useNavigation<HomeTabScreenProps<'Settings'>['navigation']>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Content',
      headerRight: () => (
        <HeaderButton
          title="Filter"
          onPress={() => navigation.navigate('SignUp')}
        />
      ),
    });
  }, [navigation]);
  return (
    <Container>
      <Body>
        <SearchBar searchIcon={false} />
        <ScrollView>
          {DATA.map((item) => (
            <ItemCard
              data={item}
              containerStyle={styles.itemContainer}
              key={item.header}
            />
          ))}
        </ScrollView>
      </Body>
    </Container>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  text: { fontSize: 18 },
  itemContainer: { marginBottom: 8 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
