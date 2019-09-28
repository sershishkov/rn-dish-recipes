import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const avaliableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = avaliableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0
  );
  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={styles.content}>
        <DefaultText> No meals found, maybe check your filters</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
