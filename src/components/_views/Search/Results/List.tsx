import { PublicationItem } from '@src/components/publication'
import {
  TFullDataItem,
  TPublication,
  TPublicationField,
  TPublicationType,
} from '@src/components/publication/_types'
import { AlgoliaInstantSearch } from '@src/components/_common'
import React, { FunctionComponent, useMemo } from 'react'
import { InfiniteHitsProvided } from 'react-instantsearch-core'
import { StyledContainer } from './List.styled'

type TProps = {
  params: {
    query: string
    field: TFullDataItem<TPublicationField> | undefined
    type: TFullDataItem<TPublicationType> | undefined
  }
  getNbrOfHit: (hitNb: number) => void
}

const List: FunctionComponent<InfiniteHitsProvided<TPublication>> = ({ hits }) => (
  <StyledContainer direction="column">
    {hits.map((item, index) => (
      <PublicationItem key={index} {...item} />
    ))}
  </StyledContainer>
)

export const SearchResultsList: FunctionComponent<TProps> = ({ params, getNbrOfHit }) => {
  const algoliaFilters = useMemo(() => {
    const allParams = ['status:PUBLISHED']

    if (params.field) {
      allParams.push(`fields.value: ${params.field.value}`)
    }

    if (params.type) {
      allParams.push(`type: ${params.type.value}`)
    }

    return allParams.join(' AND ')
  }, [params.field, params.type])

  return (
    <AlgoliaInstantSearch
      component={List}
      query={params.query}
      indexName="publications"
      filters={algoliaFilters}
      getNbrOfHit={getNbrOfHit}
      infiniteScroll
    />
  )
}

export type TListProps = TProps
