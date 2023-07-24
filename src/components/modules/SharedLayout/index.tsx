import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

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
