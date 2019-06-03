import React, { useState } from 'react';
import { contextCompoundList } from './contextCompoundList';
import { ManagerPropTypes } from './propTypes';

const Manager = ({ id, children }) => {
  const { Provider } = contextCompoundList;
  const [displayMode, setDisplayMode] = useState('');
  return (
    <Provider
      value={{
        id,
        displayModeContext: displayMode,
        setDisplayModeContext: setDisplayMode
      }}
    >
      {children}
    </Provider>
  );
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
