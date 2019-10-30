import React, {useState, useEffect} from 'react';
import { fetchBreakfastItem } from '../util/breakfast_util';
import BreakfastItem from './breakfast_item';


const NuZurv = () => {
  const [breakfastItem, setBreakfastItem] = useState(null);
  
  const getPaiBreakfast = () => {
    fetchBreakfastItem().then(breakfast => setBreakfastItem(breakfast));
  }
  
  return (
    <div>
      <h2>Commands</h2>
      <div className="command-list">
        <button onClick={getPaiBreakfast}>Get Pai Breakfast</button>
        {breakfastItem
          ? <BreakfastItem breakfastItem={breakfastItem} />
          : <div>Pai is starving</div>
        }
      </div>
    </div>
  )
}

export default NuZurv;