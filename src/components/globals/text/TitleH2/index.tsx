import { Typography, styled } from '@mui/material';

type ExtraProps = {
  component: React.ElementType;
};

interface TitleProps {
  sx?: Record<string, any>;
  children: string;
}

const Title = styled(Typography)<ExtraProps>(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 600,
  color: '#001833',
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '44px',
  },
}));

export const TitleH2 = ({ children, sx }: TitleProps) => {
  return (
    <Title component='h2' sx={sx}>
      {children}
    </Title>
  );
};
