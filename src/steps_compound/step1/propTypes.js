import PropTypes from 'prop-types';

export const ToolbarPropTypes = {
  children: PropTypes.node
};

export const ListActionsPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  id: PropTypes.string.isRequired
};

export const ListSelectAllPropTypes = {
  id: PropTypes.string.isRequired,
  onSelectAll: PropTypes.func
};

export const ListTablePropTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  id: PropTypes.string.isRequired,
  title: PropTypes.string
};
