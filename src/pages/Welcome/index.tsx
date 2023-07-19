import { Link, Typography, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Welcome() {
  return (
    <Container
      maxWidth={'lg'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box maxWidth='550px'>
        <Typography variant='h2'>Welcome to the app!</Typography>
        <Typography>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Typography>
        <Box>
          <Link component={RouterLink} to='/register'>
            Registration
          </Link>
          <Link component={RouterLink} to='/login'>
            Sign In
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Welcome;
