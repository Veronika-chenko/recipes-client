import { Link, Typography, Box, Container } from '@mui/material';

function Welcome() {
  return (
    <Container>
      <Typography variant='h1'>Welcome to the app!</Typography>
      <Typography>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Typography>
      <Box>
        <Link>Registration</Link>
        <Link>Sign In</Link>
      </Box>
    </Container>
  );
}

export default Welcome;
