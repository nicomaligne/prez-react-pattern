import { createContext, useContext } from 'react';

const contextList = createContext();

const useContextList = () => {
  const context = useContext(contextList);
  if (!context) {
    throw new Error(
      'You are using some components of the List, outside the manager provider scope'
    );
  }
  return context;
};

export { contextList, useContextList };
