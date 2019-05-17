import React from 'react';
import { contextCompoundList } from './contextCompoundList';

const Manager = ({ id, children }) => {
  const { Provider } = contextCompoundList;
  return <Provider value={{ id }}>{children}</Provider>;
};

export default Manager;
