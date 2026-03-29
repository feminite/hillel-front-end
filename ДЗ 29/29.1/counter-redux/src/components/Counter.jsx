import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>
        Value: {count}
      </h1>
      
      <div className="counter-buttons">
        <button 
          className="btn"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button 
          className="btn"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;