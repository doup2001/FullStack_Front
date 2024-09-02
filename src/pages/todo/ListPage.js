import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function ListPage() {
  const [queryParams] = useSearchParams();

  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

  const navigate = useNavigate();
  const moveToRead = () => {
    navigate({ pathname: '/todo/read/1' });
  };

  return (
    <div className='p-4 w-full bg-white'>
      <div className='text-3xl font-extrabold'>
        Todo List Page Component --- {page} --- {size}
      </div>
      <div>
        <button
          className={'text-black font-extrabold underline'}
          onClick={moveToRead}
        >
          {' '}
          ToRead
        </button>
      </div>
    </div>
  );
}

export default ListPage;
