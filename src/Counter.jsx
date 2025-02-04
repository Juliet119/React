
import React, { useState, useEffect } from 'react';
 


const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); 


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1)}>increase</button>
      <button onClick={() => setCount(count -1)}>decrease</button>
    </div>
  );
};

export default Counter;
