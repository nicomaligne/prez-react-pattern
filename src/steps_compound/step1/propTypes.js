import PropTypes from 'prop-types';

export const ToolbarPropTypes = {
  children: PropTypes.node
};

export const ListActionsPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};

export const ListSelectAllPropTypes = {
  id: PropTypes.string.isRequired,
  onSelectAll: PropTypes.func
};

export const ListTablePropTypes = {
  id: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  title: PropTypes.string
};
