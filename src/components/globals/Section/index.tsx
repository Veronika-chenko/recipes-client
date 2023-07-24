import { Box, styled } from '@mui/material';

const SectionBox = styled(Box)(({ theme }) => ({
  paddingTop: '50px',
  paddingBottom: '100px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '72px',
    paddingBottom: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '100px',
  },
}));

export const Section = ({ children }: { children: any }) => {
  return <SectionBox>{children}</SectionBox>;
};
