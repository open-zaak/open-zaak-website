import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import missedChances from '../../images/missed-chances.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading>OpenZaak</StyledHeading>
        <StyledParagraph>Online Services for Citizens</StyledParagraph>
        <StyledSubParagraph>OpenZaak is an open-source case register API provision platform for municipalities who want to deliver citizen-friendly services online.</StyledSubParagraph>
        <StyledSubParagraph><a href="/en/#about-openzaak">More information on OpenZaak</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={missedChances} alt="Illustration of man with headphone and woman with mobile phone walking down the street" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
