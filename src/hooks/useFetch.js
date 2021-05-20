import { useState, useEffect } from 'react';

const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {})
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [url, options]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
