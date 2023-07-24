import { Container } from '@mui/material';
import { Section, TitleH2 } from 'components/globals';

export const Favorites = () => {
  return (
    <Section>
      <Container maxWidth={'lg'}>
        <TitleH2 sx={{ marginBottom: { xs: '50px', md: '100px' } }}>
          Favorites
        </TitleH2>
      </Container>
    </Section>
  );
};
