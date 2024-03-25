import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useDebounce = (searchedTerm: string, time: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedValue(searchedTerm);
    }, time);

    handler();
    return () => {
      handler.cancel();
    };
  }, [searchedTerm, time]);
  return { debouncedValue };
};

export default useDebounce;
