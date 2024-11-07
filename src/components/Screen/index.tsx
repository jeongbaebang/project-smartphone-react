import styled from 'styled-components';

import { ScreenTop } from './Top';
import { ScreenMain } from './Main';

const Screen = () => {
  return (
    <Container>
      <ScreenTop />
      <ScreenMain />
    </Container>
  );
};

const Container = styled.main`
  height: 465px;
  border: 10px solid rgba(12, 12, 12, 1);
  border-bottom: none;
`;

export default Screen;
