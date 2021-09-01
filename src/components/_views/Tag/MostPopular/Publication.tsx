import { EmptyPublicationSection, PublicationItem } from '@src/components/publication'
import { TPublication } from '@src/components/publication/_types'
import { useAlgoliaSearch } from '@src/utils/hooks'
import React, { FunctionComponent, useEffect } from 'react'

type TProps = {
  tag: {
    label: string
    value: string
  }
  updateMostPopularPublication: (publication: TPublication) => void
}

export const MostPopularPublication: FunctionComponent<TProps> = ({
  tag,
  updateMostPopularPublication,
}) => {
  type NewType = TPublication

  const { results, isLoading, isFirstCall } = useAlgoliaSearch<NewType>('publications', {
    facetFilters: [`tags.value: ${tag.value}`, 'status: PUBLISHED'],
    hitsPerPage: 1,
    shouldLoad: !!tag,
  })

  useEffect(() => {
    if (!results.length) {
      return
    }

    updateMostPopularPublication(results[0])
  }, [results, updateMostPopularPublication])

  if ((isLoading && !results.length) || isFirstCall) {
    return <></>
  }

  if (!results.length) {
    return <EmptyPublicationSection />
  }

  return <PublicationItem variant="hero" {...results[0]} />
}
export type TPublicationProps = TProps
