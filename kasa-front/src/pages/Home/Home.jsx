import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import HomeList from '../../components/HomeList/HomeList.jsx';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <Home>
      <Header />
      <Hero />
      <HomeList />
      <Footer />
    </Home>
  );
}

export default App;
