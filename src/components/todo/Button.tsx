import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  fontSize?: number;
  onClick?: () => void;
  label: string | JSX.Element;
}

const TodoButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  fontSize = 20,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} $size={fontSize}>
      {label}
    </Button>
  );
};

const Button = styled.button<{ $size?: number }>`
  outline: none;
  cursor: pointer;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: inherit;
  border: ${({ theme }) => `2px solid ${theme.text.secondary}`};
  border-radius: 10px;
  color: ${({ theme }) => `${theme.text.secondary}`};
  font-size: ${({ $size }) => `${$size}px`};

  font-weight: 600;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => `${theme.text.secondary}`};
    color: ${({ theme }) => `${theme.background.primary}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:disabled:hover {
    background-color: inherit;
    color: ${({ theme }) => `${theme.text.secondary}`};
  }
`;

export default TodoButton;
