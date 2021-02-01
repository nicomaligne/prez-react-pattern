import React from 'react';
import Table from '../../common/List.component';
import { ListTablePropTypes } from './propTypes';
import { useListContext } from './listContext';

const ListTable = ({ title, headers, collection, displayMode }) => {
  const { id, state } = useListContext();
  return (
    <Table
      collection={collection}
      displayMode={displayMode || state.displayMode}
      headers={headers}
      id={`${id}-table`}
      title={title}
    />
  );
};

ListTable.propTypes = ListTablePropTypes;

export default ListTable;
