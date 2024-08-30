import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Lodaing = <div>Loading...</div>;

const Main = lazy(() => import('../pages/MainPage'));

const About = lazy(() => import('../pages/AboutPage'));

export const root = createBrowserRouter([
   {
      path: '/',
      element: (
         <Suspense fallback={Lodaing}>
            <Main />
         </Suspense>
      ),
   },
   {
      path: '/about',
      element: (
         <Suspense fallback={Lodaing}>
            <About />
         </Suspense>
      ),
   },
]);
