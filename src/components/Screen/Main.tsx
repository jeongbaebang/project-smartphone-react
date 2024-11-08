import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const ScreenMain = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-size: cover;
  background-image: url('/images/bg00.jpg');
`;
