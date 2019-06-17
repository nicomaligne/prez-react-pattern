import React from 'react';
import Table from '../../common/List.component';
import { ListTablePropTypes } from './propTypes';
import { useListContext } from './listContext';

const ListTable = ({ title, headers, collection }) => {
  const { id, displayMode } = useListContext();
  return (
    <Table
      collection={collection}
      displayMode={displayMode}
      headers={headers}
      id={`${id}-table`}
      title={title}
    />
  );
};

ListTable.propTypes = ListTablePropTypes;

export default ListTable;
