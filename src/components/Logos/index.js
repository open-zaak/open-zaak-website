import React from 'react'
import { StyledContainer } from './index.styles.js'

import gemeenteAmsterdam from './images/gemeente-amsterdam.png'
import gemeenteUtrecht from './images/gemeente-utrecht.png'

import gemeenteAlmere from './images/gemeente-almere.png'
import gemeenteArnhem from './images/gemeente-arnhem.png'
import gemeenteDelft from './images/gemeente-delft.png'
import gemeenteDenBosch from './images/gemeente-den-bosch.png'
import gemeenteHaarlem from './images/gemeente-haarlem.png'
import gemeenteRotterdam from './images/gemeente-rotterdam.png'
import gemeenteTilburg from './images/gemeente-tilburg.png'
import gemeenteSudwestFryslan from './images/gemeente-sudwest-fryslan.png'

import vng from './images/vng.png'
import dimpact from './images/dimpact.png'
import maykin from './images/maykinmedia.png'
import opensatisfaction from './images/opensatisfaction.png'
import excellence from './images/excellence.png'
import contezza from './images/contezza.png'

import sed from './images/sed.png'

import foundationForPublicCode from './images/foundation-for-public-code.png'

const Logos = () => (
  <StyledContainer>
    <a href="https://www.utrecht.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteUtrecht} height="40" alt="Logo Gemeente Utrecht" /></a>
    <a href="https://sed-organisatie.nl/" target="_blank" rel="noopener noreferrer"><img src={sed} height="40" alt="Logo SED organisatie" /></a>
    <a href="https://www.amsterdam.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAmsterdam} height="40" alt="Logo Gemeente Amsterdam" /></a>
    <a href="http://almere.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteAlmere} height="45" alt="Logo Gemeente Almere" /></a>
    <a href="http://arnhem.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteArnhem} height="45" alt="Logo Gemeente Arnhem" /></a>
    <a href="http://delft.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteDelft} height="45" alt="Logo Gemeente Delft" /></a>
    <a href="https://www.s-hertogenbosch.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteDenBosch} height="40" alt="Logo Gemeente Den Bosch" /></a>
    <a href="https://www.haarlem.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteHaarlem} height="40" alt="Logo Gemeente Haarlem" /></a>
    <a href="https://www.rotterdam.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteRotterdam} height="40" alt="Logo Gemeente Rotterdam" /></a>
    <a href="https://www.tilburg.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteTilburg} height="40" alt="Logo Gemeente Tilburg" /></a>
	<a href="https://sudwestfryslan.nl/" target="_blank" rel="noopener noreferrer"><img src={gemeenteSudwestFryslan} height="40" alt="Logo Gemeente Súdwest-Fryslân" /></a>


    <a href="https://www.maykinmedia.nl/" target="_blank" rel="noopener noreferrer"><img src={maykin} height="40" alt="Logo Maykin Media B.V." /></a>
    <a href="https://www.opensatisfaction.nl" target="_blank" rel="noopener noreferrer"><img src={opensatisfaction} height="40" alt="Logo Open Satisfaction B.V." /></a>
    <a href="https://exxellence.nl/" target="_blank" rel="noopener noreferrer"><img src={excellence} height="40" alt="Logo excellence" /></a>
    <a href="https://contezza.nl/" target="_blank" rel="noopener noreferrer"><img src={contezza} height="40" alt="Logo contezza" /></a>

    <a href="https://www.dimpact.nl" target="_blank" rel="noopener noreferrer"><img src={dimpact} height="40" alt="Logo Vereniging Dimpact" /></a>

    <a href="https://www.vng.nl" target="_blank" rel="noopener noreferrer"><img src={vng} height="40" alt="Logo Vereniging van Nederlandse Gemeenten (VNG)" /></a>
    <a href="https://publiccode.net/" target="_blank" rel="noopener noreferrer"><img src={foundationForPublicCode} height="45" alt="Logo Foundation for Public Code" /></a>
  </StyledContainer>
)

export default Logos
