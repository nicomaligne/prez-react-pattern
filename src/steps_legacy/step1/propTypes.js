import PropTypes from 'prop-types';

export const ToolbarPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  onSelectAll: PropTypes.func
};

export const ComplexListPropTypes = {
  id: PropTypes.string.isRequired,
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
