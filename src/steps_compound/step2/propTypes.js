import PropTypes from 'prop-types';

export const ToolbarProptypes = {
  children: PropTypes.node
};

export const ListActionsPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

export const ListSelectAllPropTypes = {
  onListSelectAll: PropTypes.func
};

export const ListTablePropTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  title: PropTypes.string
};

export const ManagerPropTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
