import styled from 'styled-components';
import { AppItem, EmptyAppItem } from '../components/Screen/AppItem';
import { SiNotepadplusplus } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

/**
 * 홈 스크린
 *
 * 다양한 앱을 포함하고 있다.
 */
const Home = () => {
  const navigate = useNavigate();

  const onClickTodoHandler = () => {
    navigate('/todos');
  };

  return (
    <>
      <AppListContainer>
        <AppItem
          cursor
          name="todo"
          Icon={SiNotepadplusplus}
          backgroundColor="#ABD076"
          onClick={onClickTodoHandler}
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
    </>
  );
};

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

export default Home;
