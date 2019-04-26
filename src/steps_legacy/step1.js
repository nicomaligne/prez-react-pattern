import React from 'react';
import PropTypes from 'prop-types';
import List from '../common/List.component';
import '../common/toolbar.scss';

function Toolbar(props) {
  return (
    <nav className="toolbar">
      {props.actions && (
        <ul className="toolbar-actions">
          {props.actions.map(({ label, ...buttonProps }) => (
            <li key={buttonProps.id}>
              <button {...buttonProps}>{label}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
Toolbar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};

export default function ComplexList(props) {
  return (
    <div className="step1">
      <Toolbar {...props.toolbar} />
      <List {...props.list} />
    </div>
  );
}
ComplexList.propTypes = {
  toolbar: PropTypes.shape({
    actions: PropTypes.arrayOf(PropTypes.object)
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
