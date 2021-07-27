import { useState, useEffect } from 'react';
import http from '../utils/api';

function useFetch<Response>(path: string) {
  const [result, setResult] = useState<Response[]>([]);

  useEffect(() => {
    http.get(path).then(response => {
      setResult(response.data.results);
    });
  }, []);

  return result;
}

export default useFetch;
