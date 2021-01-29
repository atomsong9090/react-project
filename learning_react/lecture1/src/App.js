import React, { useState } from 'react';
import MoreThan from './morethan';
import LessThan from './lessthan';

function App() {
  const [num, setNum] = useState(0);

  function incBtn() {
    setNum(num + 1);
  }
  function decBtn() {
    setNum(num - 1);
  }

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={incBtn}>increase</button>
      <button onClick={decBtn}>decrease</button>
      {num < 9 ? (
        <LessThan num={num} />
      ) : num === 10 ? (
        <div>숫자 10 은(는) 숫자 10과 같습니다</div>
      ) : (
        <MoreThan num={num} />
      )}
    </div>
  );
}

export default App;
