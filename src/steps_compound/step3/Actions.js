import React from 'react';
import CommonActions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { ActionsPropTypes } from './propTypes';

const Actions = ({ actions, className }) => (
  <CommonActions
    className={className ? className : 'toolbar-actions'}
    actions={actions}
  />
);

Actions.propTypes = ActionsPropTypes;

export default Actions;
