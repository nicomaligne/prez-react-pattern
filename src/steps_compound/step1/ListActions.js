import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { ListActionsPropTypes } from './propTypes';

const ListActions = ({ actions, className }) => (
  <Actions
    className={className ? className : 'toolbar-actions'}
    actions={actions}
  />
);

ListActions.propTypes = ListActionsPropTypes;

export default ListActions;
