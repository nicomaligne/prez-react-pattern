import React, { useEffect } from 'react';
import { useContextList } from './contextList';
import CommonDisplayMode from '../../common/DisplayMode.component';

const ToolbarDisplayMode = ({
  initialValue = 'table',
  value,
  onChange
}) => {
  const {
    id,
    displayMode,
    setDisplayMode
  } = useContextList();

  const controlled = !!onChange;

  useEffect(() => {
    if (!controlled) {
      setDisplayMode(initialValue);
    }
  }, []);

  const onChangeHandler = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      setDisplayMode(value);
    }
  };

  return (
    <CommonDisplayMode
      id={`toolbar-display-mode-${id}`}
      onChange={onChangeHandler}
      value={value || displayMode}
    />
  );
};

export default ToolbarDisplayMode;
