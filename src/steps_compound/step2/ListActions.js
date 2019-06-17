import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { useListContext } from './listContext';
import { ListActionsPropTypes } from './propTypes';

const ListActions = ({ actions, className }) => {
  const { id } = useListContext();
  return (
    <Actions
      actions={actions}
      className={className ? className : 'toolbar-actions'}
      id={`${id}-actions`}
    />
  );
};
ListActions.propTypes = ListActionsPropTypes;

export default ListActions;
