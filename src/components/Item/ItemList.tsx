import { COLORS } from '@config';
import { Avatar, Divider, ListItem, ListItemProps, Text } from '@rneui/themed';
import type { ListData } from '@screens/FeedScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  data: ListData;
} & ListItemProps;

const ItemList = ({ data, ...otherProps }: Props) => {
  return (
    <ListItem {...otherProps}>
      <Avatar
        size={50}
        title="A"
        icon={{ name: 'pencil', type: 'font-awesome' }}
        containerStyle={styles.avatarContainer}
      />
      <ListItem.Content>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.header}>Header {data.header}</Text>
            <Text style={styles.subText}>8m ago</Text>
          </View>
        </View>
        <Text style={styles.content}>{data.content}</Text>
        <Divider style={styles.divider} color={COLORS.GRAY_BORDER} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  divider: { width: '100%', marginTop: 15 },
  content: { fontSize: 14 },
  header: { fontWeight: 'bold' },
  subText: { fontSize: 14, color: COLORS.GRAY_TEXT },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: { width: '100%' },
  avatarContainer: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderRadius: 8,
  },
});
