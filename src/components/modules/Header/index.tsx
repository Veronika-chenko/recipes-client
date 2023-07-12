import { Grid, Box, Link, AppBar, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Navigation } from '../Navigation';

export const Header = () => {
  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='xl'>
        <Grid
          container
          alignItems='center'
          flexWrap={'nowrap'}
          justifyContent={'space-between'}
          gap={4}
        >
          <Link component={RouterLink} to='/' color='#000000'>
            Logo
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '24px',
              flexGrow: { xs: 0, md: 1 },
              ml: { lg: '180px' },
            }}
          >
            <Link color='#000000' sx={{ order: { sx: 4, md: 1 } }}>
              UserLogo
            </Link>
            <Navigation />
          </Box>
        </Grid>
      </Container>
    </AppBar>
  );
};
