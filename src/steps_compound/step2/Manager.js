import React from 'react';
import { contextList } from './contextList';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = contextList;
  return <Provider value={{ id }}>{children}</Provider>;
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
