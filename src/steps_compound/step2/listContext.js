import { createContext, useContext } from 'react';

const listContext = createContext();

const useListContext = () => {
  const context = useContext(listContext);
  if (!context) {
    throw new Error(
      'You are using some components of the List, outside the manager provider scope'
    );
  }
  return context;
};

export { listContext, useListContext };
