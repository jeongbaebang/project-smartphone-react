import styled from 'styled-components';
import { SiNotepadplusplus } from 'react-icons/si';
import { IconType } from 'react-icons';

export const ScreenMain = () => {
  return (
    <Container>
      <AppListContainer>
        <AppItem
          name="todo"
          Icon={SiNotepadplusplus}
          backgroundColor="#ABD076"
        />
        <EmptyAppItem />
        <EmptyAppItem />
        <EmptyAppItem />
      </AppListContainer>
      <AppListBottomContainer>
        <EmptyAppItem />
        <EmptyAppItem />
        <EmptyAppItem />
        <EmptyAppItem />
      </AppListBottomContainer>
    </Container>
  );
};

interface AppItemProps {
  name: string;
  Icon: IconType;
  backgroundColor?: string;
}

const AppItem: React.FC<AppItemProps> = ({ Icon, name, backgroundColor }) => {
  return (
    <AppItemContainer>
      <AppLogo style={{ backgroundColor }}>
        <Icon size={50} />
      </AppLogo>
      <AppName>{name}</AppName>
    </AppItemContainer>
  );
};

const EmptyAppItem = () => {
  return <AppItemContainer />;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-size: cover;
  background-image: url('./public/images/bg00.jpg');
`;

const AppListContainer = styled.div`
  width: 100%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AppItemContainer = styled.div`
  width: 56px;
  height: 50px;
  display: inline-block;
  margin: 8px;
  border-radius: 10px;
  background-color: rgb(255 255 255 / 40%);
  cursor: pointer;
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

const AppListBottomContainer = styled.div`
  width: 100%;
  padding: 3px;
  position: relative;
  bottom: -290px;
  background-color: rgb(255 255 255 / 40%);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
