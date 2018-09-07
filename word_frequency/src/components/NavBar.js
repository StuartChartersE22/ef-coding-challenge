import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/freq-table">Word Frequency Table</Link>
      </li>
      <li>
        <Link to="/word-cloud">Word Cloud</Link>
      </li>
    </ul>
  );
};

export default NavBar;
