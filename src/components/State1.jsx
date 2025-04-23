import React, { useState } from 'react';

const State1 = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <div>
        <button onClick={increase} style={styles.button}>+</button>
        <button onClick={decrease} style={styles.button}>-</button>
        <button onClick={reset} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: 'blue',

  },
  resetButton: {
    backgroundColor: '#f44336',
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px'
  }
};

export default State1;
