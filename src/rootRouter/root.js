import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ListPage from '../pages/todo/ListPage';

const Lodaing = <div>Loading...</div>;

const Main = lazy(() => import('../pages/MainPage'));

const About = lazy(() => import('../pages/AboutPage'));

const TodoIndex = lazy(() => import('../pages/todo/indexPage'));

const Todo_List = lazy(() => import('../pages/todo/ListPage'));

export const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Lodaing}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={Lodaing}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'todo',
    element: (
      <Suspense fallback={Lodaing}>
        {' '}
        <TodoIndex />
      </Suspense>
    ),
    children: [
      {
        path: 'list',
        element: (
          <Suspense fallback={Lodaing}>
            <ListPage />{' '}
          </Suspense>
        ),
      },
    ],
  },
]);
