import React from 'react';
import PropTypes from 'prop-types';
import BasicMenu from '../components/menus/BasicMenu';

function BasicLayout({ children }) {
  return (
    <>
      <BasicMenu></BasicMenu>

      <div className='bg-teal-400 p-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 '>
        <main className='max-w-7xl mx-auto sm:px-6 lg:px-8 flex'>
          <h1>{children}</h1>
        </main>

        <aside className='bg-green-500 w-1/3 p-4'>
          <h1 className='text-2xl md:text-4xl'>Sidebar</h1>
        </aside>
      </div>
    </>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
