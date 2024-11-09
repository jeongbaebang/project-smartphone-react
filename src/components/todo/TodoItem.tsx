import styled from 'styled-components';
import Checkbox from '../common/Checkbox';
import { useState } from 'react';

const TodoItem = () => {
  return (
    <TodoItemContainer>
      <TodoCheckButton />
      <TodoLabelContainer>
        <Item>
          {truncateText(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis ligula vel turpis lobortis, non tincidunt justo tincidunt. Maecenas vel velit id ligula malesuada sc',
            30
          )}
        </Item>
      </TodoLabelContainer>
    </TodoItemContainer>
  );
};

const truncateText = (text: string, maxLength: number) => {
  // 텍스트가 지정한 길이를 초과하면 잘라내고 '...' 추가
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export const TodoCheckButton = () => {
  const [isChecked, setCheckStatus] = useState(false);

  const onClickHandler = () => {
    setCheckStatus((prev) => !prev);
  };

  return (
    <TodoItemDeleteContainer>
      <Checkbox
        id={`checkButton-${Math.random() * 1000000}`}
        label="done"
        value={isChecked}
        onChange={onClickHandler}
      />
    </TodoItemDeleteContainer>
  );
};

const TodoItemContainer = styled.div`
  background-color: ${({ theme }) => `${theme.background.secondary}`};
  border: ${({ theme }) => `2px solid ${theme.text.primary}`};
  border-radius: 8px;
  max-width: 285px;
  min-width: 85%;
  padding: 8px;
  scroll-snap-align: start;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
`;

const TodoItemDeleteContainer = styled(Item)`
  justify-content: flex-end;
`;

const TodoLabelContainer = styled.div`
  display: flex;
  height: 70%;
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  align-items: center;
`;

export default TodoItem;
