import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { BiListPlus } from 'react-icons/bi';

import { TodoInput } from './Input';
import TodoButton from './Button';

const AddTodoForm = () => {
  return (
    <CreationContainer>
      <InputContainer>
        <TodoInput Icon={FaPen} placeholder="Today's to-do" />
      </InputContainer>
      <CreationButtonContainer>
        <TodoButton label={<BiListPlus size={30} />} />
      </CreationButtonContainer>
    </CreationContainer>
  );
};

const InputContainer = styled.div`
  flex: 0.7;
  height: 100%;
`;

const CreationButtonContainer = styled.div`
  flex: 0.3;
  height: 100%;
`;

const CreationContainer = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default AddTodoForm;
