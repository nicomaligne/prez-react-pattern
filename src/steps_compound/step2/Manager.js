import React from 'react';
import { listContext } from './listContext';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = listContext;
  return <Provider value={{ id }}>{children}</Provider>;
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
