import { PublicationItem } from '@src/components/publication'
import { TFullDataItem, TPublication, TPublicationType } from '@src/components/publication/_types'
import { useAlgoliaSearch } from '@src/utils/hooks'
import React, { FunctionComponent, useEffect } from 'react'

import { EmptyPublicationSection } from '@src/components/publication/_common/EmptyPublication/Section'

type TProps = {
  type: TFullDataItem<TPublicationType>
  updateMostPopularPublication: (publication: TPublication) => void
}

export const MostPopularPublication: FunctionComponent<TProps> = ({
  type,
  updateMostPopularPublication,
}) => {
  const { results, isLoading, isFirstCall } = useAlgoliaSearch<TPublication>('publications', {
    facetFilters: [`type: ${type.value}`, 'status: PUBLISHED'],
    hitsPerPage: 1,
    shouldLoad: !!type.value,
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

export type TMostPopularPublicationProps = TProps
