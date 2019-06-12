import PropTypes from 'prop-types';

export const ToolbarProptypes = {
  children: PropTypes.node
};

export const ToolbarActionsPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};

export const ToolbarSelectAllPropTypes = {
  onSelectAll: PropTypes.func
};

export const ListPropTypes = {
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
