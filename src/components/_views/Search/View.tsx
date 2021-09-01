import {
  PUBLICATION_FIELD_FULL_DATA,
  PUBLICATION_TYPE_FULL_DATA,
} from '@src/components/publication/constants'

import { Flex, Heading, Paragraph } from '@src/components/_core'
import { formatToPlurial } from '@src/utils'

import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { FieldFilterSelect } from './FieldFilter'
import { SearchResultsList } from './Results'
import { TypeFilterSelect } from './TypeFilter'

type TProps = {}

export const SearchView: FunctionComponent<TProps> = () => {
  const [totalHitNb, setTotalHitNb] = useState(0)

  const router = useRouter()

  const params = useMemo(() => {
    const { query } = router

    return {
      query: query.q as string,
      field: PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas)
        .flat()
        .find(area => area.url === query.field),
      type: PUBLICATION_TYPE_FULL_DATA.find(({ url }) => url === query.type),
    }
  }, [router])

  return (
    <Flex direction="column" gap="xlarge">
      <Flex direction="column" gap="large">
        <Flex direction="column" gap="xxsmall">
          <Paragraph size="small">
            {totalHitNb} {formatToPlurial('publication', totalHitNb > 1)}
          </Paragraph>
          <Heading variant="h2" color="dark-text" weight="semi-bold">
            Publications matching{params.query ? `: ${params.query}` : ''}
          </Heading>
        </Flex>
        <Flex direction="row" gap="xsmall" align="start">
          <TypeFilterSelect params={params} />
          <FieldFilterSelect params={params} />
        </Flex>
        {!!totalHitNb && <Paragraph color="dark-text">Ordered by relevance</Paragraph>}
      </Flex>
      <SearchResultsList params={params} getNbrOfHit={setTotalHitNb} />
    </Flex>
  )
}

export type TSearchViewProps = TProps
