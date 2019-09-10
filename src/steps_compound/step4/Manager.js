import React, { useReducer } from 'react';
import { listContext } from './listContext';
import { ManagerPropTypes } from './propTypes';

const initialState = initialDisplayMode => ({
  displayMode: initialDisplayMode || 'table'
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeDisplayMode':
      return { ...state, displayMode: action.value };
    default:
      return state;
  }
};

const Manager = ({ id, children, initialDisplayMode }) => {
  const { Provider } = listContext;
  const [state, dispatch] = useReducer(
    reducer,
    initialState(initialDisplayMode)
  );
  const value = { state, dispatch };
  return <Provider value={value}>{children}</Provider>;
};

Manager.propTypes = ManagerPropTypes;

export default Manager;
