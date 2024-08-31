import React from 'react';
import { Link } from 'react-router-dom';

function BasicMenu(props) {
  return (
    <div>
      <div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/todo/'}>Todo</Link>
      </div>

      <div>
        <h2>Login</h2>
      </div>
    </div>
  );
}

export default BasicMenu;
