import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/missed-chances.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>OpenZaak</StyledHeading>
        <StyledParagraph>Online dienstverlening voor burgers</StyledParagraph>
        <StyledSubParagraph>OpenZaak maakt het mogelijk voor gemeenten om sneller en eenvoudiger online diensten aan te kunnen bieden aan haar inwoners en noodzakelijke data te kunnen uitwisselen tussen gemeenten.</StyledSubParagraph>
        <StyledSubParagraph><a href="/#over-openzaak">Lees hier meer over OpenZaak</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={missedChances} alt="Illustratie van man met koptelefoon en vrouw met telefoon op straat" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
