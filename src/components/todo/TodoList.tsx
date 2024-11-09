import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoItemListContainer>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoItemListContainer>
  );
};

const TodoItemListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  min-height: 104px;
  padding: 3px;
  gap: 4px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export default TodoList;
