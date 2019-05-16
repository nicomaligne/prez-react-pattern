import React from 'react';
import Actions from '../../common/Actions.component';

export const ListActions = ({ actions }) => (
  <Actions className="toolbar-actions" actions={actions} />
);

export default ListActions; 
