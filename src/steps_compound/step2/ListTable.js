import React from 'react';
import List from '../../common/List.component';
import { ListTablePropTypes } from './propTypes';
import { useListContext } from './listContext';

const ListTable = ({ title, headers, collection }) => {
  const { id } = useListContext();
  return (
    <List
      collection={collection}
      headers={headers}
      id={`${id}-list`}
      title={title}
    />
  );
};

ListTable.propTypes = ListTablePropTypes;

export default ListTable;
