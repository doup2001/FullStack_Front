import React from 'react';
import BasicLayout from '../layouts/Basic Layout';
import { Link } from 'react-router-dom';

function MainPage(props) {
  return (
    <BasicLayout>
      <div className={'text-3xl'}> Main Page</div>
      <Link className={'text-2xl'} to={'/about'}>
        About
      </Link>
    </BasicLayout>
  );
}

export default MainPage;
