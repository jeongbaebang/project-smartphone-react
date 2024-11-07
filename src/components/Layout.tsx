import { PropsWithChildren } from 'react';
import styled from 'styled-components';

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
