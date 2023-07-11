import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Typography>Not Found</Typography>
      <Link to='/' component={RouterLink}>
        Go Home
      </Link>
    </>
  );
}

export default NotFound;
