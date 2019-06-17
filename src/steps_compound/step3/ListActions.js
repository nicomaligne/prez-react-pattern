import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { ListActionsPropTypes } from './propTypes';

const ListActions = ({ actions, className, id }) => (
  <Actions
    actions={actions}
    className={className ? className : 'toolbar-actions'}
    id={`${id}-actions`}
  />
);
ListActions.propTypes = ListActionsPropTypes;

export default ListActions;
