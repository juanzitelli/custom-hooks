import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        isMounted.current && setState({ data, loading: false, error: null });
      })
      .catch(() => setState({ data: null, loading: false, error:"No se pudo encontrar una frase" }));
  }, [url]);

  return state;
};

export default useFetch;
