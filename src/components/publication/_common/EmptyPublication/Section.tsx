import React, { FunctionComponent } from 'react'

import NoPublicationIllustration from '@src/assets/illustrations/publish-publication.svg'
import { Flex, Heading, Link, Paragraph } from '@src/components/_core'
import { StyledIllustrationContainer } from './Section.styled'

type TProps = {}

export const EmptyPublicationSection: FunctionComponent<TProps> = () => {
  return (
    <Flex direction="column" gap="medium">
      <StyledIllustrationContainer>
        <NoPublicationIllustration />
      </StyledIllustrationContainer>
      <Flex direction="column" gap="xxsmall">
        <Heading variant="h2" color="dark-text" weight="semi-bold">
          There are no publications available here at the moment
        </Heading>
        <Paragraph>
          If you are working on the subject, do not hesitate{' '}
          <Link href="https://app.scientifichub.io/" target="_blank" variant="no-styles">
            to write about it
          </Link>
        </Paragraph>
      </Flex>
    </Flex>
  )
}

export type TEmptyPublicationSectionProps = TProps
