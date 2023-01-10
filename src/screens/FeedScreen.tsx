import Container from '@components/Container';
import HeaderButton from '@components/Header/HeaderButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import {
  ComposeScreenNavigationProp,
  CustomScreenRouteProp,
} from 'src/navigators/types';

const FeedScreen = () => {
  const navigation =
    useNavigation<ComposeScreenNavigationProp<'Feed', 'Settings'>>();
  const route = useRoute<CustomScreenRouteProp<'Feed'>>();
  const { name } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          title="Right"
          onPress={() => navigation.navigate('Home')}
        />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Text>{name}</Text>
      <Button
        title="Press"
        onPress={() =>
          navigation.navigate('Settings', {
            title: 'HELLO',
          })
        }
      />
    </Container>
  );
};

export default FeedScreen;
