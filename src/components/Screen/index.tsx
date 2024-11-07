import styled from 'styled-components';

import { ScreenTop } from './Top';

const Screen = () => {
  return (
    <Container>
      <ScreenTop />
    </Container>
  );
};

const Container = styled.main`
  height: 465px;
  border: 10px solid rgba(12, 12, 12, 1);
  border-bottom: none;
`;

export default Screen;
