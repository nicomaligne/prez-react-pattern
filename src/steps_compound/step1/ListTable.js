import React from 'react';
import List from '../../common/List.component';
import { ListTablePropTypes } from './propTypes';

const ListTable = ({ id, title, headers, collection }) => (
  <List
    collection={collection}
    headers={headers}
    id={`${id}-table`}
    title={title}
  />
);

ListTable.propTypes = ListTablePropTypes;

export default ListTable;
