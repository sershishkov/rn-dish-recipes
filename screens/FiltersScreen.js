import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegeterian, setVegeterian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        label='Vegeterian'
        state={isVegeterian}
        onChange={newValue => setVegeterian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        {' '}
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />{' '}
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
