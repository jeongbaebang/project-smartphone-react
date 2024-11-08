import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <Container>
      <HomeButton onClick={onClickHandler} />
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  padding: 4px;
  border-radius: 0px 0px 20px 20px;
  background-color: rgba(12, 12, 12, 1);
`;

const HomeButton = styled.div`
  width: 3.355rem;
  height: 3.355rem;
  margin: 0 auto;
  border: 5px solid #5a505270;
  border-radius: 100%;
  background-color: #383434;
  cursor: pointer;
`;

export default Footer;
