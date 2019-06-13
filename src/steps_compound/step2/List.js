import React from 'react';
import CommonList from '../../common/List.component';
import { ListPropTypes } from './propTypes';
import { useContextList } from './contextList';

const List = ({ title, headers, collection }) => {
  const { id } = useContextList();
  return (
    <CommonList
      collection={collection}
      headers={headers}
      id={`${id}-list`}
      title={title}
    />
  );
};

List.propTypes = ListPropTypes;

export default List;
