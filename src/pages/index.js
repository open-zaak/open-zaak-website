import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import casesImage from '../images/undraw_file_analysis_8k9b.svg'
import selectionImage from '../images/undraw_personal_settings_kihd.svg'
import authorizationImage from '../images/undraw_two_factor_authentication_namy.svg'
import dashboardImage from '../images/undraw_dashboard_nklg.svg'
import integrationImage from '../images/undraw_hologram_fjwp.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="OpenZaak: Online dienstverlening voor burgers" />
    <Background backgroundColor="#178be9">
      <Container>
        <Navigation as="nav" location={location} />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#178be9">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="over-openzaak">
        <Flex>
          <Box>
            <p>OpenZaak is productiewaardig API platform die <a href="https://www.vngrealisatie.nl/producten/api-standaarden-zaakgericht-werken">de API standaard voor zaakgericht werken</a> implementeert (de < a href="https://github.com/VNG-Realisatie/gemma-zaken">ZGW-API’s</a>). Met OpenZaak wordt het voor gemeenten mogelijk om veilige en betrouwbare diensten aan te kunnen bieden aan haar inwoners en bedrijven. Omdat OpenZaak gebruik maakt van de <a href="https://www.vngrealisatie.nl/producten/api-standaarden-zaakgericht-werken">Zaakgerichtwerken standaard</a> wordt het uitwisselen van gegevens met andere gemeenten en/of applicaties eenvoudiger en veiliger. OpenZaak is open source software. Dat betekent dat iedereen vrij is deze software te hergebruiken of aan te passen aan haar wensen.</p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Demo van het gebruik van OpenZaak" src="https://player.vimeo.com/video/389842983" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document" />
          </Box>
          <Box width={3/5}>
            <h2>Zaken, Besluiten, Documenten en Open Notificaties</h2>
            <p>OpenZaak implementeert de <a href="https://github.com/VNG-Realisatie/gemma-zaken">ZGW-API’s</a> en combineert deze met een gebruiksvriendelijke beheerinterface. Door gebruik te maken van de Open Notificaties standaard kunnen updates van zaken gepubliceerd worden naar andere systemen, zodat die systemen wijzigingen in (de status van) de zaak kunnen volgen.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Catalogi & gemeentelijke selectielijsten</h2>
            <p>OpenZaak bevat een beheerinterface voor catalogi en gemeentelijke selectielijsten. Zo kunt u gebruiken maken van standaard instellingen voor archivering van zaakgerichte gegevens bij het implementeren van uw proces en waar nodig deze aanpassen of aanvullen.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={authorizationImage} alt="Illustratie van desktop computer en mobiele applictie met een slot" />
          </Box>
          <Box width={3/5}>
            <h2>Autorisatie & Beheer</h2>
            <p> OpenZaak bevat autorisatie module waarmee u gecontroleerd toegang tot de Zaakgericht werken API's kunt beheren en monitoren. Zo heeft u een centraal overzicht welke applicaties toegang hebben tot welke API’s en data. </p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>API Dashboard</h2>
            <p>OpenZaak bevat een API dashboard dat inzicht geeft in het gebruik van OpenZaak. Zo krijgt u inzicht met welke frequentie en volume gegevens in OpenZaak worden geraadpleegd. Dit kan helpen bij het bijsturen en prioriteren bij het afhandelen van zaken.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={dashboardImage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={integrationImage} alt="Abstracte illustratie met cirkels die verbinding maakt met andere figuren" />
          </Box>
          <Box width={3/5}>
            <h2>Syteem integraties</h2>
            <p>Omdat OpenZaak open source is kunnen leveranciers systeemintegraties met OpenZaak ontwikkelen voor hun document en content management systemen. Zo heeft u de vrijheid om gebruik te maken van bestaande of nieuwe applicaties in combinatie met OpenZaak. OpenZaak koppelt onder andere met Contezza DMS en Alfresco.</p>
          </Box>
        </Flex>
      </Section>

    </Container>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center" fontSize="2rem">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Timeline>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q1 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Oplevering OpenZaak</Heading>
            <p>Oplevering productie waardige versie van OpenZaak. OpenZaak is klaar voor productie bij de gemeentelijke deelnemers.</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage
