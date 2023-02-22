import { useEffect, useState } from 'react';

const useDebounce = ({ input = '', time = 500 }) => {
  const [debounce, setDebounce] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return { debounce };
};

export default useDebounce;
