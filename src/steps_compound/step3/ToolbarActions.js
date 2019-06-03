import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { ToolbarActionsPropTypes } from './propTypes';

const ToolbarActions = ({ actions, className }) => (
  <Actions
    className={className ? className : 'toolbar-actions'}
    actions={actions}
  />
);

ToolbarActions.propTypes = ToolbarActionsPropTypes;

export default ToolbarActions;
