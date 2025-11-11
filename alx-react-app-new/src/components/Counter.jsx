import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
