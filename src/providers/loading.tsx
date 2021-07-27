import React, {
  createContext,
  Dispatch,
  ReactChild,
  ReactChildren,
  useContext,
  useState,
} from 'react';
import Loading from '../components/loading/loading.component';

const LoadingContext = createContext(false);
const LoadingDispatchContext = createContext<Dispatch<boolean> | null>(null);

interface Props {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

function LoadingProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={loading}>
      <LoadingDispatchContext.Provider value={setLoading}>
        {children}
        {loading && <Loading />}
      </LoadingDispatchContext.Provider>
    </LoadingContext.Provider>
  );
}

export const useLoadingDispatch = () => {
  const dispatch = useContext(LoadingDispatchContext);
  if (!dispatch) {
    throw new Error("Can't use dispatch before initialize");
  }
  return dispatch;
};

export const useLoading = () => {
  const loading = useContext(LoadingContext);
  return loading;
};

export default LoadingProvider;
