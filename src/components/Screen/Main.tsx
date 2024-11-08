import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/**
 * 스크린 메인
 *
 * 사용자 앱과 기본 화면을 렌더링 한다.
 */
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
