import React from 'react';
// import { ComplexListPropTypes, ToolbarPropTypes } from './propTypes';

import SelectAll from '../../common/SelectAll.component';
import List from '../../common/List.component';

import '../../common/toolbar.scss';

export const SelectAll = ({ id, onSelectAll }) => (
  <SelectAll id={`${id}-select`} onClick={onSelectAll} />
);

const DefautToolbarContent = ({ id }) => (
  <React.Fragment>
    <SelectAll id={id} onSelectAll={() => {}} />
    <Actions actions={[]} />
  </React.Fragment>
);

export const Toolbar = ({ id, children }) => {
  return <nav className="toolbar">{children}</nav>;
};

export default function ComplexList({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}
