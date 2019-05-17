import React from 'react';
import { contextCompoundList } from './contextCompoundList';

const CompoundList = ({ id, children }) => {
  const { Provider } = contextCompoundList;
  return <Provider value={{ id }}>{children}</Provider>;
};

export default CompoundList;
