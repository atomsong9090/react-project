import React, { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const incBtn = () => {
    setNumber(number + 1);
  };
  const decBtn = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    console.log(`카운터 작동, 현재 숫자: ${number}`);
  }, [number]);

  return (
    <>
      <div>{number}</div>
      <button onClick={incBtn}>increase</button>
      <button onClick={decBtn}>decrease</button>
    </>
  );
}

export default App;
