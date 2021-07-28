import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { useLoadingDispatch } from '../providers/loading';
import http from '../utils/api';

function useFetch<Response>(path: string, config?: AxiosRequestConfig) {
  const setLoading = useLoadingDispatch();
  const [result, setResult] = useState<Response | null>(null);

  useEffect(() => {
    setLoading(true);
    http.get(path, config).then(response => {
      setResult(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    });
  }, [config?.params.page]);

  return result;
}

export default useFetch;
