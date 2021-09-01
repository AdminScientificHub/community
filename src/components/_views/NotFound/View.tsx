import React, { FunctionComponent } from 'react'

import ErrorPublicationIllustration from '@src/assets/illustrations/error-publication.svg'
import { Flex, Heading, Link, Paragraph } from '@src/components/_core'
import { StyledContainer, StyledHeading, StyledIllustrationContainer } from './View.styled'
import { useScreenSize } from '@src/utils/hooks'

type TProps = {}

export const NotFoundView: FunctionComponent<TProps> = () => {
  const { isMobile, isSmallTablet } = useScreenSize()

  return (
    <StyledContainer
      direction="row"
      padding={{ vertical: isMobile || isSmallTablet ? 'medium' : 'huge' }}
      gap={isMobile || isSmallTablet ? 'xlarge' : 'large'}
    >
      <StyledIllustrationContainer>
        <ErrorPublicationIllustration />
      </StyledIllustrationContainer>
      <Flex direction="column">
        <Heading variant="h3" color="dark-text">
          PAGE NOT FOUND
        </Heading>
        <StyledHeading variant="h1" color="text">
          404
        </StyledHeading>
        <Flex gap="small" direction="column">
          <Heading variant="h1" weight="regular">
            Out of nothing, something.
          </Heading>
          <Paragraph color="dark-text" size="large">
            You can find (just about) anything on ScientificHub — apparently even a page that
            doesn’t exist. Maybe these stories about finding what you didn’t know you were looking
            for will take you somewhere new?
          </Paragraph>
          <Link href="/">Back Home</Link>
        </Flex>
      </Flex>
    </StyledContainer>
  )
}

export type TViewProps = TProps
