// const { data, isError, isLoading } = useApi<ProductType[]>(fetchProducts);
// const { data, isError, isLoading } = useApi(fetchProducts);

import { useCallback, useEffect, useState } from 'react';

// pending
// fulfilled
// rejected

// discriminated unions
type ResponseState<S> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
      // errorId
    }
  | {
      // fulfilled
      data: S;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

export const useApi = <T>(fetchFunction: () => Promise<T>) => {
  const [state, setState] = useState<ResponseState<T>>({
    // initial state
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const loadData = async () => {
    try {
      const result = await fetchFunction();
      if (result) {
        setState({
          data: result as T,
          isError: false,
          isLoading: false,
        });
      }
    } catch (error) {
      setState({
        data: undefined,
        isError: true,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, [fetchFunction]);

  return state;
};
