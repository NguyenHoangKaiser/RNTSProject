import { COLORS } from '@config';
import { Card, Text, Skeleton, ListItem, ListItemProps } from '@rneui/themed';
import type { ListData } from '@screens/FeedScreen';
import React from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  data: ListData;
} & ListItemProps;

const ItemCard = ({ data, ...otherProps }: Props) => {
  return (
    <ListItem {...otherProps}>
      <Card containerStyle={styles.cardContainer}>
        <Skeleton height={240} />
        <Text style={styles.header}>Header {data.header}</Text>
        <Text style={styles.content}>{data.content}</Text>
        <Text style={styles.subText}>8m ago</Text>
      </Card>
    </ListItem>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardContainer: { width: '100%' },
  subText: { fontSize: 14, color: COLORS.GRAY_TEXT },
  content: { fontSize: 14, marginVertical: 4 },
  header: { fontWeight: 'bold', marginTop: 4 },
  divider: { width: '100%', marginTop: 15 },
});
