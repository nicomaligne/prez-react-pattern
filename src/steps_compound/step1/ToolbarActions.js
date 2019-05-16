import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';


const ToolbarActions = ({ actions }) => (
  <Actions className="toolbar-actions" actions={actions} />
);

export default ToolbarActions; 
