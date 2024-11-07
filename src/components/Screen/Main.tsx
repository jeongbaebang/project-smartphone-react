import styled from 'styled-components';
import { SiNotepadplusplus } from 'react-icons/si';
import { AppItem, EmptyAppItem } from './AppItem';

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
