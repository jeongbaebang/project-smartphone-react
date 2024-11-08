import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/**
 * 디바이스 전체 컨테이너를 담당한다.
 *
 * 디바이스 높이, 너비, 그림자 등 외부 요소를 포함하고 있다.
 */
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 350px;
  height: 618px;
  margin: 0 auto;
  text-align: center;
  border-radius: 20px;
  border: 2px solid rgb(67 65 65);
  background: linear-gradient(rgb(12 12 12), rgb(67 65 65));
  box-shadow: -1px 0px 18px 1px rgba(0, 0, 0, 0.7);
`;

export default Layout;
