export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFaforite = id => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  };
};
