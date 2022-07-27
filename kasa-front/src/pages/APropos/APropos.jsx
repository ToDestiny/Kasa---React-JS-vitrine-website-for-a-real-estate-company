import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AProposCollapse from '../../components/HeroAPropos/AProposCollapse.jsx';
import HeroAPropos from '../../components/HeroAPropos/HeroAPropos.jsx';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function APropos() {
  return (
    <Home>
      <Header />
      <HeroAPropos />
      <AProposCollapse
        title={'Fiabilité'}
        text={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        }
      />
      <AProposCollapse
        title={'Respect'}
        text={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
      />
      <AProposCollapse
        title={'Service'}
        text={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
      />
      <AProposCollapse
        title={'Sécurité'}
        text={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
        }
      />
      <Footer />
    </Home>
  );
}

export default APropos;
