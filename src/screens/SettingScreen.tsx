import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, TabView, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { HomeTabScreenProps } from 'src/navigators/types';
import HeaderButton from '@components/Header/HeaderButton';
import Container from '@components/Container';
import Body from '@components/Body';
import { COLORS } from '@config';
import CustomTab from '@components/Tab';
import { ItemList } from '@components/Item';
import { useAppSelector } from '@reduxCore/store/reduxHooks';
import { selectAllPosts } from '@reduxCore/main/postsSlice';
import { useGetAllPostsQuery, useGetPostQuery } from '@reduxCore/api/rtkApi';
import { TPost } from '@reduxCore/types';

// Empty array to be used as default value for postsArray, better reference than undefined
const emptyArray: TPost[] = [];

const SettingsScreen = () => {
  const navigation =
    useNavigation<HomeTabScreenProps<'Settings'>['navigation']>();
  const [tabIndex, setTabIndex] = useState(0);
  const { data: postQueryData, isLoading, isFetching } = useGetPostQuery(1);
  const postsState = useAppSelector(selectAllPosts);

  const { postsQueryArray } = useGetAllPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      postsQueryArray: data ?? emptyArray, // if data is undefined, return emptyArray
    }),
  });

  const postsStateData = postsState.map((item) => ({
    header: item.id.toString(),
    content: item.title,
  }));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: COLORS.PRIMARY },
      headerLeft: () => (
        <HeaderButton title="Back" textStyle={styles.headerText} />
      ),
      headerRight: () => (
        <HeaderButton
          title="Logout"
          textStyle={styles.headerText}
          onPress={() => navigation.navigate('Login')}
        />
      ),
    });
  }, [navigation]);
  // api to fetch mock images from unsplash
  // https://source.unsplash.com/random/200x200
  return (
    <>
      <View style={styles.headerBackground} />
      <Container>
        <View style={styles.avatarViewContainer}>
          <Avatar
            size={148}
            rounded
            title="AV"
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            containerStyle={styles.avatarContainer}
          />
        </View>
        <Body style={styles.body}>
          <View style={styles.titleContainer}>
            <Text h3 style={styles.text}>
              Settings Screen
            </Text>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : isFetching ? (
              <Text>Fetching...</Text>
            ) : (
              <Text>{postQueryData?.title}</Text>
            )}
          </View>
          <CustomTab
            indicatorTitle={['Posts', 'Photos']}
            activeValue={tabIndex}
            setActiveValue={setTabIndex}>
            <TabView.Item>
              {/* if isLoading is true, show postsStateData, else show
              postsQueryArray */}
              {isLoading ? (
                <ScrollView
                  overScrollMode="never"
                  contentContainerStyle={styles.scrollView}>
                  {postsStateData.map((item, index) => (
                    <ItemList
                      data={item}
                      containerStyle={styles.itemContainer}
                      key={`${item.header}_${index}`}
                    />
                  ))}
                </ScrollView>
              ) : (
                <ScrollView
                  overScrollMode="never"
                  contentContainerStyle={styles.scrollView}>
                  {postsQueryArray
                    ?.map((item) => ({
                      header: item.id.toString(),
                      content: item.title,
                    }))
                    .map((item, index) => (
                      <ItemList
                        data={item}
                        containerStyle={styles.itemContainer}
                        key={`${item.header}_${index}`}
                      />
                    ))}
                </ScrollView>
              )}
            </TabView.Item>
            <TabView.Item>
              <Text h1>Photos</Text>
            </TabView.Item>
          </CustomTab>
        </Body>
      </Container>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  scrollView: { paddingBottom: 100 },
  itemContainer: { paddingHorizontal: 0 },
  titleContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  body: { paddingTop: 35 },
  avatarContainer: {
    backgroundColor: 'gray',
    top: -120,
    position: 'absolute',
    elevation: 5,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  avatarViewContainer: { alignItems: 'center' },
  headerBackground: {
    backgroundColor: COLORS.PRIMARY,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { color: 'white' },
  text: { fontSize: 18 },
  view: { flex: 1, paddingTop: 12, paddingHorizontal: 10 },
});
