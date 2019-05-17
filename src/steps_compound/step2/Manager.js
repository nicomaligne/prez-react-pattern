import React from 'react';
import { contextCompoundList } from './contextCompoundList';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = contextCompoundList;
  return <Provider value={{ id }}>{children}</Provider>;
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
