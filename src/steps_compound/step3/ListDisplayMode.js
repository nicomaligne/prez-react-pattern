import React, { useEffect } from 'react';
import { useListContext } from './listContext';
import DisplayMode from '../../common/DisplayMode.component';

const MemoDisplayMode = React.memo(({ id, setDisplayMode, displayMode }) => {
  return (
    <DisplayMode
      id={`${id}-display-mode`}
      onChange={setDisplayMode}
      value={displayMode}
    />
  );
});

const ListDisplayMode = ({ initialDisplayMode = 'table' }) => {
  const { id, displayMode, setDisplayMode } = useListContext();
  useEffect(() => {
    setDisplayMode(initialDisplayMode);
  }, []);
  return (
    <MemoDisplayMode
      id={id}
      displayMode={displayMode}
      setDisplayMode={setDisplayMode}
    />
  );
};

export default ListDisplayMode;
