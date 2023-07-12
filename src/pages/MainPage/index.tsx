import { Box, Typography } from '@mui/material';

function MainPage() {
  return (
    <Box pt='162px' pb='267px'>
      <Box sx={{ maxWidth: 510 }} mb='50px'>
        <Typography variant='h1'>SoYummy</Typography>
        <Typography variant='body1'>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Typography>
      </Box>
    </Box>
  );
}

export default MainPage;
