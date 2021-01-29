import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_town_r6pc from '../../images/undraw_town_r6pc.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>OpenZaak</StyledHeading>
        <StyledParagraph>Online dienstverlening voor burgers</StyledParagraph>
        <StyledSubParagraph>OpenZaak maakt het mogelijk voor gemeenten om veilige en betrouwbare online diensten aan te kunnen bieden aan haar inwoners en bedrijven.</StyledSubParagraph>
        <StyledSubParagraph><a href="/#over-openzaak">Lees hier meer over OpenZaak</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_town_r6pc} alt="Illustratie van man met vrouw op straat in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
