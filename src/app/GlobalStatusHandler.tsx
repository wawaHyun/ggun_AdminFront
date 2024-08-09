import React from 'react';
import { useGlobalState } from './GlobalStateProvider';
import IsLoading from './component/queryState/isLoading';
import IsError from './component/queryState/isError';

const GlobalStatusHandler = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isError } = useGlobalState();

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return <>{children}</>;
};

export default GlobalStatusHandler;