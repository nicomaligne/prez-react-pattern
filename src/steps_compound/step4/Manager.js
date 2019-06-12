import React, { useState } from 'react';
import { contextList } from './contextList';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = contextList;
  const [displayMode, setDisplayMode] = useState('');
  return (
    <Provider
      value={{
        id,
        displayMode,
        setDisplayMode
      }}
    >
      {children}
    </Provider>
  );
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
