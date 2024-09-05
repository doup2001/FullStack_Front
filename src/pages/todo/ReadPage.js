import React, { useCallback } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

function ReadPage() {
  const { tno } = useParams();

  const [queryParams] = useSearchParams();

  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

  const queryStr = createSearchParams({ page: page, size: size }).toString();

  const navigate = useNavigate();

  const moveToModify = useCallback((tno) => {
    navigate({
      pathname: `/todo/modify/${tno}`,
      search: queryStr,
    });
  });

  const moveToList = useCallback(() => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  }, [page, size]);


  return (
    <div>
      <div className={'text-3xl'}> Todo Read Page{tno} </div>
      <div>
        <button onClick={moveToModify}>Move To Modify</button>
        <button onClick={() => moveToList()}>Test List</button>
      </div>
    </div>
  );
}

export default ReadPage;
