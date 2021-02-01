import React from 'react';
import '../../common/toolbar.scss';
import { ToolbarProptypes } from './propTypes';

const Toolbar = ({ children }) => <nav className="toolbar">{children}</nav>;

Toolbar.propTypes = ToolbarProptypes;

export default Toolbar;
