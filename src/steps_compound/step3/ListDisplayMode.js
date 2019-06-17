import React, { useEffect } from 'react';
import { useListContext } from './listContext';
import DisplayMode from '../../common/DisplayMode.component';

const ListDisplayMode = ({ initialDisplayMode = 'table' }) => {
  const { id, displayMode, setDisplayMode } = useListContext();

  useEffect(() => {
    setDisplayMode(initialDisplayMode);
  }, []);

  return (
    <DisplayMode
      id={`toolbar-display-mode-${id}`}
      onChange={setDisplayMode}
      value={displayMode}
    />
  );
};

export default ListDisplayMode;
