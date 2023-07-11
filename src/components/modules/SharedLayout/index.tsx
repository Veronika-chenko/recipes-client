import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback='Loading...'>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
