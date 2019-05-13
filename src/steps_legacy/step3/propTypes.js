// step 3: multiplication des features ==> apropscalypse
import PropTypes from 'prop-types';

export const ToolbarPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  displayMode: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),
  onSelectAll: PropTypes.func
};

export const ComplexListPropTypes = {
  id: PropTypes.string.isRequired,
  displayMode: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),

  // new feature: sort
  sort: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: {
      sortBy: PropTypes.string,
      desc: PropTypes.bool
    }
  }),

  // new feature: filter
  filter: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }),

  // new feature: pagination
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    nbPages: PropTypes.number,
    nbPerPage: PropTypes.number,
    onChange: PropTypes.func
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
