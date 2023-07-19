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
          sx={{ gap: { lg: '187px' } }}
        >
          <Link component={RouterLink} to='/' color='#000000'>
            Logo
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '24px',
              flexGrow: { xs: 0, lg: 1 },
            }}
          >
            <Link color='#000000' sx={{ order: { sx: 4, lg: 1 } }}>
              UserLogo
            </Link>
            <Navigation />
          </Box>
        </Grid>
      </Container>
    </AppBar>
  );
};
