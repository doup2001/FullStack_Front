import React from 'react';
import { Link } from 'react-router-dom';

function BasicMenu(props) {
  return (
    <nav id='navbar' className='flex bg-black'>
      <div className='w-4/5 bg-gray-700'>
        <ul className='w-4/5 text-white font-bold'>
          <li className='pr-6 text-2xl'>
            <Link to={'/'}>Main</Link>
          </li>
          <li className='pr-6 text-2xl'>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='pr-6 text-2xl'>
            <Link to={'/todo/'}>Todo</Link>
          </li>
        </ul>
      </div>
      <div className='w-4/5 flex justify-end bg-red-200 p-4 font-medium'>
        <div className='text-black m-1 rounded'>Login</div>
      </div>
    </nav>
  );
}

export default BasicMenu;
