import styled from 'styled-components';

import AddTodoForm from '../components/todo/AddTodoForm';
import TodoList from '../components/todo/TodoList';
import TodoDetail from '../components/todo/TodoDetail';

const Todos = () => {
  return (
    <Container>
      {/* 생성 */}
      <AddTodoForm />
      {/* 목록 */}
      <TodoList />
      {/* 상세 아이템  */}
      <TodoDetail />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  background-color: #eeeded;
  padding: 4px;
  gap: 5px;
`;

export default Todos;
