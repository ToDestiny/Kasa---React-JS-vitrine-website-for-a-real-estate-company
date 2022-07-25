import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <Home>
      <Header />
      <Footer />
    </Home>
  );
}

export default App;
