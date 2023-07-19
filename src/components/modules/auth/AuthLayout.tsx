import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import image from 'images/auth.png';

const style = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '122px',

  backgroundImage: `url(${image})`,
  backgroundSize: '532px',
  backgroundRepeat: 'no-repeat',
  height: '468px',
};

export default function AuthLayout() {
  return (
    <Container maxWidth={'lg'}>
      <Box sx={style}>
        <Outlet />
      </Box>
    </Container>
  );
}
