import { createContext, useContext } from 'react';

const contextCompoundList = createContext();

const useContextCompoundList = () => {
  const context = useContext(contextCompoundList);
  /*
        specific slide to show how we can enforce our component api.
    */
  if (!context) {
    throw new Error(
      'You are using some components of the CompoundList, outside the manager provider scope'
    );
  }
  return context;
};

export { contextCompoundList, useContextCompoundList };
