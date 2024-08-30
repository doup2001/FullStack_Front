import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(props) {
  return (
    <div>
      <div className={'text-3xl'}>MainPage</div>
      <div>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}

export default MainPage;
