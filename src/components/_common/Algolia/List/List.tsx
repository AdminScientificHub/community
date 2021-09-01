import React, { FunctionComponent, useEffect } from 'react'
import { InfiniteHitsProvided } from 'react-instantsearch-core'
import { connectInfiniteHits } from 'react-instantsearch-dom'
import { useInView } from 'react-intersection-observer'
import { TAlgoliaInstantSearchProps } from '..'

type TAlgoliaInstantSearchConnectedProps = InfiniteHitsProvided & {
  infiniteScroll: TAlgoliaInstantSearchProps['infiniteScroll']
}

const AlgoliaInstantSearchListComponent: FunctionComponent<TAlgoliaInstantSearchConnectedProps> = ({
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

export const AlgoliaInstantSearchList = connectInfiniteHits(AlgoliaInstantSearchListComponent)
