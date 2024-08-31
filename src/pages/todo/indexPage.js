import React from 'react';
import BasicLayout from '../../layouts/Basic Layout';
import { Link, Outlet } from 'react-router-dom';

function IndexPage(props) {
  return (
    <BasicLayout>
      <div>
        <Link to={'/todo/list'}>List</Link>
        <div>ADD</div>
      </div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
