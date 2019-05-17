import React from 'react';
import CommonList from '../../common/List.component';
import { ListPropTypes } from './propTypes';
import { useContextCompoundList } from './contextCompoundList';

const List = ({ title, headers, collection }) => {
  const { id } = useContextCompoundList();
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
