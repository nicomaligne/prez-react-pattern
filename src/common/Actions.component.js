import React from 'react';
import PropTypes from 'prop-types';

export default function Actions(props) {
  const { classname, actions } = props;

  return (
    <ul className={classname}>
      {actions.map(({ label, ...buttonProps }) => (
        <li key={buttonProps.id}>
          <button {...buttonProps}>{label}</button>
        </li>
      ))}
    </ul>
  );
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  classname: PropTypes.string
};
