import styled from 'styled-components'
import Header from './components/Header/Header';
import Categorie from './components/Categories/Categories';

function App() {
  return (
      <Wrapper>
          <Header title="Sports AsknReply app" />
          <Categorie/>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100vh;
  background: #28282B;
`;

export default App;
