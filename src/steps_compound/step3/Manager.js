import React, { useState, useMemo } from 'react';
import { listContext } from './listContext';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = listContext;
  const [displayMode, setDisplayMode] = useState('');
  const value = useMemo(() => ({ id, displayMode, setDisplayMode }), [
    displayMode
  ]);
  return <Provider value={value}>{children}</Provider>;
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
