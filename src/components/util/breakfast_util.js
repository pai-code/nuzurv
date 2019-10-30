import axios from 'axios';

export const fetchBreakfastItem = () => {
  return axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(breakfast => breakfast.data.meals[0]);
}