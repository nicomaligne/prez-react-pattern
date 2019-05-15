import React from 'react';
import PropTypes from 'prop-types';

export default function SelectAll(props) {
  const { classname, id, onClick } = props;

  return (
    <form className={classname}>
      <label htmlFor={id}>
        <input id={id} type="checkbox" onClick={onClick} />
        Select all
      </label>
    </form>
  );
}

SelectAll.propTypes = {
  classname: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
