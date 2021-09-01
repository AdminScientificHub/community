import React, { FunctionComponent, useMemo } from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch } from 'react-instantsearch-dom'
import { env } from '@src/utils'

import { Configure } from 'react-instantsearch-dom'

import { AlgoliaInstantSearchList } from './List'
import { AlgoliaInstantSearchStats } from './Stats'

export type TAlgoliaInstantSearchProps = {
  indexName: 'publications'
  component: any
  hitsPerPage?: number
  infiniteScroll?: boolean
  filters?: string
  query?: string
  getNbrOfHit?: (hitNb: number) => void
}

export const AlgoliaInstantSearch: FunctionComponent<TAlgoliaInstantSearchProps> = ({
  indexName,
  component,
  filters = '',
  infiniteScroll,
  query,
  hitsPerPage = 10,
  getNbrOfHit,
}) => {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_KEY)
  }, [])

  const MountedComponent = useMemo(() => {
    return React.createElement(component)
  }, [component])

  if (!searchClient) {
    return null
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <Configure query={query} filters={filters} hitsPerPage={hitsPerPage} />
      <AlgoliaInstantSearchStats getNbrOfHit={getNbrOfHit} />
      <AlgoliaInstantSearchList infiniteScroll={infiniteScroll}>
        {MountedComponent}
      </AlgoliaInstantSearchList>
    </InstantSearch>
  )
}
