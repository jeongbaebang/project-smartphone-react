import { TodoCheckButton } from './TodoItem';
import TodoButton from './Button';
import styled from 'styled-components';

const TodoDetail = () => {
  return (
    <TodoDetailContainer>
      <TodoOptionsContainer>
        <TodoCheckButton />
      </TodoOptionsContainer>
      <LabelContainer>
        <TodoDetailTitle>title:</TodoDetailTitle>
        <TodoDetailContent>Content:</TodoDetailContent>
      </LabelContainer>
      <TodoButtonContainer>
        <TodoButton label={'Modify'} />
        <TodoButton label={'Delete'} />
      </TodoButtonContainer>
    </TodoDetailContainer>
  );
};
const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  border-radius: 8px;
  border: ${({ theme }) => `2px solid ${theme.text.primary}`};
  padding: 10px;
`;

const TodoOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const LabelContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const TodoDetailTitle = styled.h1`
  font-size: 20px;
`;

const TodoDetailContent = styled.h2`
  font-size: 16px;
`;

const TodoButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 10px;
`;

export default TodoDetail;
