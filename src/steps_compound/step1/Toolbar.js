import React from 'react';
import '../../common/toolbar.scss';
import { ToolbarPropTypes } from './propTypes';

const Toolbar = ({ children }) => <nav className="toolbar">{children}</nav>;

Toolbar.propTypes = ToolbarPropTypes;

export default Toolbar;
