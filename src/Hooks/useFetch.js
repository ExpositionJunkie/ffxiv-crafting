import { useState, useEffect } from "react";

export const useFetch = (ready, url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ready === true) {
      debugger;
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  }, [ready, url, options]);

  return { response, error };
};

//https://www.30secondsofcode.org/react/s/use-fetch
