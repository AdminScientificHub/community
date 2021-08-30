import React, { FunctionComponent } from 'react'
import { PublicationItem } from '@src/components/publication'
import { TPublication } from '@src/components/publication/_types'

import { InfiniteHitsProvided } from 'react-instantsearch-core'

import { AlgoliaInstantSearch } from '@src/components/_common/Algolia/InstantSearch'

type TProps = {} & InfiniteHitsProvided<TPublication>

const HomeViewComponent: FunctionComponent<TProps> = ({ hits, hasMore, ...props }) => {
  return (
    <>
      {hits.map((item, index) => (
        <PublicationItem key={index} {...item} />
      ))}
    </>
  )
}

export const HomeView: FunctionComponent = () => (
  <AlgoliaInstantSearch
    indexName="publications"
    component={HomeViewComponent}
    filters="status:PUBLISHED"
    infiniteScroll
  />
)

export type THomeProps = TProps
