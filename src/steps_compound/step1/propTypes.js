import PropTypes from 'prop-types';

export const ToolbarPropTypes = {
  children: PropTypes.node
};

export const ToolbarActionsPropTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};

export const ToolbarSelectAllPropTypes = {
  id: PropTypes.string.isRequired,
  onSelectAll: PropTypes.func
};

export const ListPropTypes = {
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
