import styled from 'styled-components';

const Todos = () => {
  return (
    <Container>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export default Todos;
