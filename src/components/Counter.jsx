import React, { useState } from 'react'
import "./Counter.css"
import { Rate } from 'antd';

const Counter = (props) => {
      const [count, setCount] = useState(0);
      const increase = () => setCount(count + 1);
      const decrease = () => setCount(count - 1);
      const reset = () => setCount(0);
  return (
    <div className='wrapper'>
        <div>
            <h1>Simple Counter</h1>
        <h1>{count}</h1>
        <div className="block">
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Delate</button>
        </div>  
        <Rate />
        </div>
      {props.a}
    </div>
  )
}

export default Counter