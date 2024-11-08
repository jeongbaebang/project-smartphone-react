import { IconType } from 'react-icons';
import styled from 'styled-components';

interface AppItemProps {
  name: string;
  Icon: IconType;
  backgroundColor?: string;
  onClick?: () => void;
  cursor?: boolean;
}

export const AppItem: React.FC<AppItemProps> = ({
  Icon,
  name,
  backgroundColor,
  onClick,
  cursor,
}) => {
  return (
    <AppItemContainer onClick={onClick} $cursor={cursor}>
      <AppLogo style={{ backgroundColor }}>
        <Icon size={50} />
      </AppLogo>
      <AppName>{name}</AppName>
    </AppItemContainer>
  );
};

export const EmptyAppItem = () => {
  return <AppItemContainer />;
};

const AppItemContainer = styled.div<{ $cursor?: boolean }>`
  width: 56px;
  height: 50px;
  display: inline-block;
  margin: 8px;
  border-radius: 10px;
  background-color: rgb(255 255 255 / 40%);
  cursor: ${(props) => (props.$cursor ? 'pointer' : 'default')};
`;

const AppLogo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppName = styled.div`
  position: relative;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
