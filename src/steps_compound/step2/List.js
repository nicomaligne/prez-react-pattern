import React from 'react';
import CommonList from '../../common/List.component';
import { ListPropTypes } from './propTypes';

const List = ({ id, title, headers, collection }) => (
  <CommonList
    collection={collection}
    headers={headers}
    id={`${id}-list`}
    title={title}
  />
);

List.propTypes = ListPropTypes;

export default List;
