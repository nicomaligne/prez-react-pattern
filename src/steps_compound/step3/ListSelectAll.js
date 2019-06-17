import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ListSelectAllPropTypes } from './propTypes';
import { useListContext } from './listContext';

const MemoSelectAll = React.memo(({ id, onSelectAll }) => {
  return <SelectAll id={`${id}-select`} onClick={onSelectAll} />;
});

const ListSelectAll = ({ onSelectAll }) => {
  const { id } = useListContext();
  return <MemoSelectAll id={id} onSelectAll={onSelectAll} />;
};

ListSelectAll.propTypes = ListSelectAllPropTypes;

export default ListSelectAll;
