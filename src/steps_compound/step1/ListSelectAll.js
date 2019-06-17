import React from 'react';
import SelectAll from '../../common/SelectAll.component';
import '../../common/toolbar.scss';
import { ListSelectAllPropTypes } from './propTypes';

const ListSelectAll = ({ id, onSelectAll }) => (
  <SelectAll id={`${id}-select`} onClick={onSelectAll} />
);

ListSelectAll.propTypes = ListSelectAllPropTypes;

export default ListSelectAll;
