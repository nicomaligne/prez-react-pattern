import React, { useEffect } from 'react';
import { useContextCompoundList } from './contextCompoundList';
import CommonDisplayMode from '../../common/DisplayMode.component';

const ToolbarDisplayMode = ({
  initialDisplayMode = 'table',
  displayModeValue,
  setDisplayModeValue
}) => {
  const {
    id,
    displayModeContext,
    setDisplayModeContext
  } = useContextCompoundList();

  useEffect(() => {
    console.log('toto')
    if (!displayModeValue && !displayModeContext) {
      setDisplayModeContext(initialDisplayMode);
    }
  }, []);

  const onChange = (value) => {
    if (setDisplayModeValue) {
      setDisplayModeValue(value);
    } else {
      setDisplayModeContext(value);
    }
  };

  return (
    <CommonDisplayMode
      id={`toolbar-display-mode-${id}`}
      onChange={onChange}
      value={displayModeValue || displayModeContext}
    />
  );
};

export default ToolbarDisplayMode;
