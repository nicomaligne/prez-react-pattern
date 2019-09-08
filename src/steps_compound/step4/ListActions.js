import React from 'react';
import Actions from '../../common/Actions.component';
import '../../common/toolbar.scss';
import { useListContext } from './listContext';
import { ListActionsPropTypes } from './propTypes';

const MemoActions = React.memo(({ actions, id, className }) => {
  return (
    <Actions
      actions={actions}
      className={className ? className : 'toolbar-actions'}
      id={`${id}-actions`}
    />
  );
});

const ListActions = ({ actions, className }) => {
  const { id } = useListContext();
  return <MemoActions actions={actions} className={className} id={id} />;
};
ListActions.propTypes = ListActionsPropTypes;

export default ListActions;
