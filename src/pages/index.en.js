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
import Payoff from '../components/Payoff/index.en.js'
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
    <SEO title="OpenZaak: Online services for citizens" />
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
      <Section id="about-openzaak">
        <Flex>
          <Box>
          <p>OpenZaak is a production-ready API platform that implements <a href="https://www.vngrealisatie.nl/producten/api-standaarden-zaakgericht-werken">the Dutch national standard for case-oriented working</a> (also known as the < a href="https://github.com/VNG-Realisatie/gemma-zaken">ZGW-API’s</a>). OpenZaak makes it possible for municipalities to offer safe and reliable online services to its citizens. Because OpenZaak relies on <a href="https://www.vngrealisatie.nl/producten/api-standaarden-zaakgericht-werken">the case-oriented working standard</a>, it becomes easier to securely exchange data with other municipalities and / or applications. OpenZaak is open source software. This means that everyone is free to reuse this software or adapt it to their needs.</p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe title="Demo usage OpenZaak" src="https://player.vimeo.com/video/389842983" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={casesImage} alt="Illustratie van persoon met pen" />
          </Box>
          <Box width={3/5}>
            <h2>Cases, Decisions, Documents and Open Notifications</h2>
            <p>OpenZaak implements the < a href="https://github.com/VNG-Realisatie/gemma-zaken">ZGW-API’s</a> and combines them with a user-friendly management interface. By using the open notifications standard, updates on citizens cases can be published to different systems. In this way, every system is automatically informed about the status of a case.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Catalogue & municipal selection lists</h2>
            <p>OpenZaak includes a management interface for catalogs and municipal selection lists. For example, you can use standard selection lists when implementing your business process and adjust or supplement them where necessary.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={selectionImage} alt="Illustration of robot" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={authorizationImage} alt="Illustratie van persoon in werkkleding" />
          </Box>
          <Box width={3/5}>
            <h2>Authorization & Access management</h2>
            <p>OpenZaak includes an authorization module which helps you manage and monitor controlled access to the OpenZaak APIs. This gives you a central overview of which applications have access to which APIs and data.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>API Dashboard</h2>
            <p>OpenZaak includes an API dashboard that provides insight into the use of OpenZaak. This will give you a better insight into the usage of OpenZaak. This can help adjust and prioritize the handling of cases.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={dashboardImage} alt="Illustratie of person with tablet showing graphs" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={integrationImage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
          </Box>
          <Box width={3/5}>
            <h2>Sytem integrations</h2>
            <p>Because OpenZaak is open source, suppliers can develop OpenZaak system integrations for their document and content management systems. This gives you the freedom to use existing or new applications in combination with OpenZaak. OpenZaak integrates with Contezza DMS and Alfreso, among others.</p>
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
            <Heading as="h3" fontSize="1.5rem">Ready for production</Heading>
            <p>Delivery of a municipal neutral version of the Signalen software. Signalen is ready for production for the municipal participants from the Kopgroep.</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer location={location} />
  </Layout>
)

export default IndexPage
