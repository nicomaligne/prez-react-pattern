import React, { useEffect } from 'react';
import { useListContext } from './listContext';
import DisplayMode from '../../common/DisplayMode.component';

const isDefined = arg => typeof arg !== undefined || typeof arg !== null;

const controlled = (componentName, ...args) => {
  const isControlled = args.every(isDefined);
  if (!isControlled && args.some(arg)) {
    throw new Error(
      `You are trying to control the ${componentName} but not all value are defined`
    );
  }
  return isControlled;
};

const displayModeAction = value => ({
  type: 'changeDisplayMode',
  value
});

const MemoDisplayMode = React.memo(({ id, onChange, value }) => {
  return (
    <DisplayMode
      id={`${id}-display-mode`}
      onChange={onChange}
      value={value}
    />
  );
});

const ListDisplayMode = (displayMode, setDisplayMode) => {
  const { id, state, dispatch } = useListContext();
  const isControlled = controlled(displayMode, setDisplayMode);
  const dispatchChangeDisplayMode = value => dispatch(displayModeAction(value));
  return (
    <MemoDisplayMode
      id={id}
      displayMode={isControlled ? displayMode : state.displayMode}
      setDisplayMode={isControlled ? setDisplayMode : dispatchChangeDisplayMode}
    />
  );
};

export default ListDisplayMode;
