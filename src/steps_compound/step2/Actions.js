import React from 'react';
import CommonActions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { ActionsPropTypes } from './propTypes';

const Actions = ({ actions }) => (
  <CommonActions className="toolbar-actions" actions={actions} />
);

Actions.propTypes = ActionsPropTypes;

export default Actions;
