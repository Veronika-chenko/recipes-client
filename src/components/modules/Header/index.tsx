import { Grid, Box, Link, Button } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <Grid container alignItems='center' gap={4}>
      <Link>Logo</Link>
      <Box>Navigation</Box>
      <Button>UserLogo</Button>
      <Button>ThemeToggler</Button>
    </Grid>
  );
};
