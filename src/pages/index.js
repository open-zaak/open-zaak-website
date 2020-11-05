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
            <p>OpenZaak is een open source zaaksysteem server die de nationale standaard voor zaakgericht werken implementeert (de ZGW-API’s). OpenZaak is software die het mogelijk maakt voor gemeenten om sneller en eenvoudiger online diensten aan te kunnen bieden aan haar inwoners en noodzakelijke data te kunnen uitwisselen tussen gemeenten.</p>
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
            <h2>Zaken, besluiten, Documenten</h2>
            <p>Bewoners, bezoekers en bedrijven doen hun meldingen over de openbare ruimte in een tekstveld op een pagina op de gemeentewebsite. Dit tekstveld is in feite een interactief portaal. De melder hoeft niet langer zelf een categorie te kiezen voor de melding. Signalen kent die automatisch toe, op basis van honderdduizenden eerder geclassificeerde meldingen. Gemeenten die Signalen gaan gebruiken, trainen het algoritme met eigen data in eigen classificaties.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Catalogi & gemeentelijke selectielijsten</h2>
            <p>De automatische classificering kan worden gekoppeld aan dynamische routering. Dit betekent dat op basis van de categorie van een melding, deze automatisch wordt doorverwezen naar de juiste behandelaar en/of afdeling. Iedere gemeenten configureert Signalen voor haar eigen, lokale situatie.</p>
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
            <p>Medewerkers die meldingen behandelen zien in Signalen altijd de actuele status van een melding, en de historie. Dat scherm kan tot op bepaalde hoogte worden gepersonaliseerd, voor groter werkgemak.</p>
            <p>Medewerkers hebben geen nieuwe inloggegevens nodig om te werken met Signalen. Inloggen gaat hetzelfde als bij de andere gemeentelijke systemen met behulp van Single Sign On.</p>
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
