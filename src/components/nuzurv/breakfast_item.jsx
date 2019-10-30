import React from 'react';

const BreakfastItem = ({ breakfastItem }) => {

  return (
    <div>
      <h2>{breakfastItem.strMeal}</h2>
      <img src={breakfastItem.strMealThumb} />
    </div>
  )
}

export default BreakfastItem;