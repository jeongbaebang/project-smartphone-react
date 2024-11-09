import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import styled, { useTheme } from 'styled-components';

type IconOptions = {
  size: number;
  color: string;
};

interface InputProps {
  Icon: IconType;
  iconOptions?: IconOptions;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
}

export const TodoInput: React.FC<InputProps> = (props) => {
  const theme = useTheme();

  const defaultIconOptions: IconOptions = {
    size: 24,
    color: `${theme.text.secondary}80`,
  };

  const {
    Icon,
    iconOptions = defaultIconOptions,
    onChange,
    value,
    placeholder,
    type,
  } = props;

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    return onChange?.(target.value);
  };

  return (
    <InputContainer>
      <Icon {...iconOptions} />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        type={type}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => `${theme.background.secondary}`};
  border: none;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.background.primary}`};
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 8px;
  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => `${theme.text.secondary}`};
  font-size: 16px;
  line-height: 24px;
  outline: none;
  margin-top: 4px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => `${theme.text.secondary}80`};
  }

  &:focus {
    outline: none;
  }
`;
