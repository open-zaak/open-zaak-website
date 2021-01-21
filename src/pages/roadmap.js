import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import ResponsiveImage from '../components/ResponsiveImage'
import Layout from '../components/Layout'

import Footer from '../components/Footer'
import Section from '../components/Section'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Background from '../components/Background'
import Timeline from '../components/Timeline'
import Span from '../components/Span'

import doorontwikkeling from '../images/doorontwikkeling.svg'
import communityImg from '../images/community.svg'
import sprint from '../images/sprint.svg'
import connectingTeams from '../images/connecting-teams.svg'
import startOntwikkeling from '../images/start-ontwikkeling.svg'
import startInitiatief from '../images/start-initiatief.svg'


const RoadmapPage = ({ location }) => (
  <Layout>
    <SEO title="Roadmap" />
    <Background backgroundColor="#178be9">
    <Container>
      <Navigation as="nav" location={location} />
    </Container>
    </Background>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Section>
          Heeft u ideeën over de toekomstige ontwikkeling van OpenZaak of mis je bepaalde functionaliteit? Kijk op de <a href="https://github.com/orgs/open-zaak/projects/2">feature request backlog</a>.
      </Section>
    </Container>
    <Container>
      <Timeline>
      <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q3 - 2019</Span>
            <Heading as="h3" fontSize="1.5rem">Start implementatie</Heading>
            <p></p>
            <ResponsiveImage src={startOntwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 - 2019</Span>
            <Heading as="h3" fontSize="1.5rem">Inzicht verkrijgen en rapportage, performance</Heading>
            <p></p>
            <ResponsiveImage src={startInitiatief} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q1 - 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Oplevering OpenZaak</Heading>
            <p></p>
            <ResponsiveImage src={connectingTeams} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q2 - 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Marktconsultatie OpenZaak en workshops</Heading>
            <p></p>
            <ResponsiveImage src={sprint} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q3 2020</Span>
            <Heading as="h3" fontSize="1.5rem">Vormgeven technische en product stuurgroepen</Heading>
            <p></p>
            <ResponsiveImage src={communityImg} />
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Q4 -2020</Span>
            <Heading as="h3" fontSize="1.5rem">Roadmap</Heading>
            <p>De start richting één integrale functionele roadmap. De roadmap laat zien waar OpenZaak heen gaat en bevat features die voor iedere gemeente waardevol zijn.</p>
          </Timeline.Content>
        </Timeline.Container>
        <Timeline.Container align="right">
          <Timeline.Content>
            <Span fontSize="0.9rem">2021</Span>
            <Heading as="h3" fontSize="1.5rem">Opschalen & doorontwikkelen</Heading>
            <p>Opschalen van OpenZaak bij Nederlandse gemeenten.</p>
            <ResponsiveImage src={doorontwikkeling} />
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default RoadmapPage
