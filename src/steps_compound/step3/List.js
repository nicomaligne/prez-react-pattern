import React from 'react';
import CommonList from '../../common/List.component';
import { ListPropTypes } from './propTypes';
import { useContextCompoundList } from './contextCompoundList';

const List = ({ title, headers, collection, displayModeValue }) => {
  const { id, displayModeContext } = useContextCompoundList();
  return (
    <CommonList
      collection={collection}
      displayMode={displayModeValue || displayModeContext}
      headers={headers}
      id={`${id}-list`}
      title={title}
    />
  );
};

List.propTypes = ListPropTypes;

export default List;
