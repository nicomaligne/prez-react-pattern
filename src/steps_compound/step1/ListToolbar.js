import React from 'react';
import '../../common/toolbar.scss';
import { ListToolbarProptypes } from './propTypes';

const ListToolbar = ({ children }) => <nav className="toolbar">{children}</nav>;

ListToolbar.propTypes = ListToolbarProptypes;

export default ListToolbar;
