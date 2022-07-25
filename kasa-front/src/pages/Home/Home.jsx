import Header from '../../components/Header/Header.jsx';
import styled from 'styled-components';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <Home>
      <Header />
    </Home>
  );
}

export default App;
