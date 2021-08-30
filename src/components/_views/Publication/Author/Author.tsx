import { TPublication } from '@src/components/publication/_types'
import { Thumbnail } from '@src/components/_common'
import { Flex, Heading, Paragraph } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

type TProps = {
  mainAuthor?: TPublication['authors'][0]
}

export const PublicationViewAuthor: FunctionComponent<TProps> = ({ mainAuthor }) => {
  return (
    <Flex direction="row" gap="large" align="start">
      <Thumbnail size="huge" firstName={mainAuthor?.firstName} />
      <Flex direction="column" gap="xxsmall">
        <Flex direction="column">
          <Heading variant="h3">Written by</Heading>
          <Heading variant="h2" color="dark-text">
            {mainAuthor?.firstName} {mainAuthor?.lastName}
          </Heading>
        </Flex>
        <Paragraph size="large">{mainAuthor?.title}</Paragraph>
      </Flex>
    </Flex>
  )
}

export type TPublicationViewAuthorProps = TProps
