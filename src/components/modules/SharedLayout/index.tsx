import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth={'lg'}>
        <Suspense fallback='Loading...'>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
