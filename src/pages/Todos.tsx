import styled from 'styled-components';

import AddTodoForm from '../components/todo/AddTodoForm';

const Todos = () => {
  return (
    <Container>
      {/* 생성 */}
      <AddTodoForm />
      {/* 목록 */}
      <h1>test</h1>
      {/* 상세 아이템  */}
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
  background-color: #f8f8f8;
  padding: 4px;
`;

export default Todos;
