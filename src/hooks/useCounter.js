import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleOnclick = (e) => {
    setCounter(counter + 1);
  };

  return {
    counter,
    handleOnclick,
  };
}

export default useCounter;