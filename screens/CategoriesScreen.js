import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderFridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderFridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default CategoriesScreen;
