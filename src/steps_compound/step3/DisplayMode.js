import React, { useEffect } from 'react';
import { useContextList } from './contextList';
import CommonDisplayMode from '../../common/DisplayMode.component';

const DisplayMode = ({ initialDisplayMode = 'table' }) => {
  const { id, displayMode, setDisplayMode } = useContextList();

  useEffect(() => {
    setDisplayMode(initialDisplayMode);
  }, []);

  return (
    <CommonDisplayMode
      id={`toolbar-display-mode-${id}`}
      onChange={setDisplayMode}
      value={displayMode}
    />
  );
};

export default DisplayMode;
