import styled from 'styled-components';

/**
 * 디바이스 상단을 담당한다.
 */
const Header = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  height: 45px;
  margin-top: 10px;
  border-radius: 20px 20px 0px 0px;
  background-color: rgba(12, 12, 12, 1);
`;

const Line = styled.div`
  width: 62px;
  height: 4px;
  margin: 0 auto;
  border: 1px solid #5a505270;
  background-color: #383434;
`;

export default Header;
