import './index.scss';
import React from 'react';

type Props = {
  nbOpenElement?: number,
  setAllToZero: () => void
};

const Counter = ( {nbOpenElement, setAllToZero} : Props): JSX.Element => {

  return (
    <button onClick={() => setAllToZero()} className="Counter">
      {nbOpenElement}
    </button>
  );
};

export default Counter;
