// step 4: multiplication des features ==> apropscalypse

import React from 'react';
import PropTypes from 'prop-types';

export default function ComplexList() {
  return null;
}
ComplexList.propTypes = {
  id: PropTypes.string.isRequired,
  displayMode: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),

  // new feature: sort
  sort: PropTypes.shape({
    onChange: PropTypes.func,
    by: PropTypes.string,
    desc: PropTypes.bool
  }),

  // new feature: filter
  filter: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),

  toolbar: PropTypes.shape({
    actions: PropTypes.arrayOf(PropTypes.object),
    onSelectAll: PropTypes.func
  }),
  list: PropTypes.shape({
    collection: PropTypes.arrayOf(PropTypes.object),
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        type: PropTypes.string
      })
    ),
    title: PropTypes.string
  })
};
