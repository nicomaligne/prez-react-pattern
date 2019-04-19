import React from 'react';
import List from '../common/List.component';

function Toolbar() {
  return (
    <nav>
      <ul>
        <li>
          <button style="btn btn-primary">Add</button>
        </li>
      </ul>
    </nav>
  );
}

function ComplexList(props) {
  return (
    <div>
      <Toolbar />
      <List />
    </div>
  );
}
