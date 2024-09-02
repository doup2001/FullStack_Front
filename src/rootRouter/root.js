import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import todoRouter from './todoRouter';

const Lodaing = <div>Loading...</div>;

const Main = lazy(() => import('../pages/MainPage'));

const About = lazy(() => import('../pages/AboutPage'));

const TodoIndex = lazy(() => import('../pages/todo/indexPage'));

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
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter,
  },
]);
