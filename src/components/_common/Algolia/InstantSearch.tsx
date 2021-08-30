import React, { FunctionComponent, useEffect, useMemo } from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch } from 'react-instantsearch-dom'
import { env } from '@src/utils'

import { connectInfiniteHits } from 'react-instantsearch-dom'
import { InfiniteHitsProvided } from 'react-instantsearch-core'
import { Configure } from 'react-instantsearch-dom'

import { useInView } from 'react-intersection-observer'

type TAlgoliaInstantSearchConnectedProps = InfiniteHitsProvided & {
  infiniteScroll: TAlgoliaInstantSearchProps['infiniteScroll']
}

const AlgoliaInstantSearchConnected: FunctionComponent<TAlgoliaInstantSearchConnectedProps> = ({
  children,
  hasMore,
  refineNext,
  infiniteScroll,
  ...props
}) => {
  const [ref, inView] = useInView()

  const fillChidrenWithAlgoliaData = React.Children.toArray(children).map(item =>
    React.isValidElement(item) ? React.cloneElement(item, { ...props, refineNext, hasMore }) : item,
  )

  useEffect(() => {
    if (inView && hasMore) {
      refineNext()
    }
  }, [hasMore, inView, refineNext])

  return (
    <>
      {fillChidrenWithAlgoliaData}
      {hasMore && <div ref={ref} />}
    </>
  )
}

const AlgoliaInstantSearchComponent = connectInfiniteHits(AlgoliaInstantSearchConnected)

type TAlgoliaInstantSearchProps = {
  indexName: 'publications'
  component: any
  hitsPerPage?: number
  infiniteScroll?: boolean
  filters?: string
}

export const AlgoliaInstantSearch: FunctionComponent<TAlgoliaInstantSearchProps> = ({
  indexName,
  component,
  filters = '',
  infiniteScroll,
  hitsPerPage = 10,
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
      <Configure filters={filters} hitsPerPage={hitsPerPage} />
      <AlgoliaInstantSearchComponent infiniteScroll={infiniteScroll}>
        {MountedComponent}
      </AlgoliaInstantSearchComponent>
    </InstantSearch>
  )
}
