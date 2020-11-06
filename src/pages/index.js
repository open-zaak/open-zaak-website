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

import meldingMakenOntvangen from '../images/melding-maken-ontvangen.svg'
import categoriserenRouteren from '../images/categoriseren-routeren.svg'
import behandelen from '../images/behandelen.svg'
import rapportage from '../images/rapportage.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="OpenZaak: Online dienstverlening voor burgers" />
    <Background backgroundColor="#3298DC">
      <Container>
        <Navigation as="nav" location={location} />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#24305E">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="over-openzaak">
        <Flex>
          <Box>
            <p>OpenZaak is een open source software die de nationale standaard voor zaakgericht werken implementeert (de ZGW-API’s). OpenZaak maakt het mogelijk voor gemeenten om sneller en eenvoudiger online diensten aan te kunnen bieden aan haar inwoners en noodzakelijke data te kunnen uitwisselen tussen gemeenten.</p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Demo van het gebruik van OpenZaak" src="https://player.vimeo.com/video/389842983" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={meldingMakenOntvangen} alt="Illustratie van persoon met pen" />
          </Box>
          <Box width={3/5}>
            <h2>Zaken, Besluiten, Documenten en Open Notificaties</h2>
            <p>OpenZaak implementeert de ZGW API's en combineert deze met een gebruiksvriendelijke beheersinterface. Door gebruik te maken van de open notificaties standaard kunnen updates van zaken makkelijk gepubliceerd worden naar verschillende systemen.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Catalogi & gemeentelijke selectielijsten</h2>
            <p>OpenZaak bevat een beheer interface voor catalogi en gemeentelijke selectielijsten. </p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={categoriserenRouteren} alt="Illustratie van robot" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={behandelen} alt="Illustratie van persoon in werkkleding" />
          </Box>
          <Box width={3/5}>
            <h2>Autorisatie & Beheer</h2>
            <p> OpenZaak autorisatie module waarmee u snel de toegang tot de Zaakgericht werken API's kunt beheren en monitoren. </p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>API Dashboard</h2>
            <p>Signalen kan eenvoudig worden gekoppeld aan rapportagetools zoals Tableau. Rapportages over meldingen openbare ruimte kunnen dus naar eigen wens worden ingericht.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={rapportage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
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
            <Span fontSize="0.9rem">Q4 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Klaar voor productie</Heading>
            <p>Oplevering gemeente-neutrale versie Signalen-software. Signalen is klaar voor productie bij de gemeentelijke deelnemers uit de Kopgroep.</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage
