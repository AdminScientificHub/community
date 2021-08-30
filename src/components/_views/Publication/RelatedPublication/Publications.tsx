import { PublicationItem } from '@src/components/publication'
import { TPublication } from '@src/components/publication/_types'
import { Divider } from '@src/components/_common'
import { Flex, Paragraph } from '@src/components/_core'
import { useAlgoliaSearch, useScreenSize } from '@src/utils/hooks'
import React, { FunctionComponent } from 'react'

type TProps = {
  publication: TPublication
}

export const RelatedPublication: FunctionComponent<TProps> = ({ publication }) => {
  const { isDesktop } = useScreenSize()

  // IMPROVE
  const { results } = useAlgoliaSearch<TPublication>('publications', {
    facetFilters: [`id:-${publication.id}`, 'status:PUBLISHED'],
    hitsPerPage: 3,
  })

  return (
    <Flex direction="column" gap="xlarge" maxWidth={128}>
      <Flex direction="column" gap="xsmall">
        <Paragraph size="xlarge" color="dark-text">
          More from ScientificHub
        </Paragraph>
        <Divider />
      </Flex>
      <Flex direction={isDesktop ? 'row' : 'column'} gap="xlarge">
        {results.map(result => (
          <PublicationItem
            key={result.id}
            direction={isDesktop ? 'vertical' : 'horizontal'}
            {...publication}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export type TRelatedPublicationProps = TProps
