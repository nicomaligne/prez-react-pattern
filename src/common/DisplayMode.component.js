import React from 'react';
import PropTypes from 'prop-types';

import './DisplayMode.scss';

export default function DisplayMode(props) {
  const { onChange, value } = props;

  return (
    <div className="display-mode">
      <button
        aria-label="Set Table as display mode"
        aria-selected={value === 'table'}
        className={value === 'table' ? 'is-active' : null}
        onClick={() => onChange('table')}
        title="Set Table as display mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <g>
            <path d="M1,1 L15,1 C15.5522847,1 16,1.44771525 16,2 L16,14 C16,14.5522847 15.5522847,15 15,15 L1,15 C0.44771525,15 6.76353751e-17,14.5522847 0,14 L0,2 C-6.76353751e-17,1.44771525 0.44771525,1 1,1 Z M1,4 L1,6 L15,6 L15,4 L1,4 Z M1,7.5 L1,9.5 L15,9.5 L15,7.5 L1,7.5 Z M1,11 L1,13 L15,13 L15,11 L1,11 Z" />
          </g>
        </svg>
      </button>

      <button
        aria-label="Set Large as display mode"
        aria-selected={value === 'large'}
        className={value === 'large' ? 'is-active' : null}
        onClick={() => onChange('large')}
        title="Set Large as display mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <g>
            <path d="M1,1 L15,1 C15.5522847,1 16,1.44771525 16,2 L16,14 C16,14.5522847 15.5522847,15 15,15 L1,15 C0.44771525,15 6.76353751e-17,14.5522847 0,14 L0,2 C-6.76353751e-17,1.44771525 0.44771525,1 1,1 Z M1,4 L1,8 L15,8 L15,4 L1,4 Z M1,9 L1,13 L15,13 L15,9 L1,9 Z" />
          </g>
        </svg>
      </button>
    </div>
  );
}

DisplayMode.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
