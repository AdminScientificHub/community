import { PublicationItem } from '@src/components/publication'
import { TFullDataItem, TPublication, TPublicationType } from '@src/components/publication/_types'
import { useAlgoliaSearch } from '@src/utils/hooks'
import React, { FunctionComponent, useEffect } from 'react'

type TProps = {
  type: TFullDataItem<TPublicationType>
  updateMostPopularPublication: (publication: TPublication) => void
}

export const MostPopularPublication: FunctionComponent<TProps> = ({
  type,
  updateMostPopularPublication,
}) => {
  const { results } = useAlgoliaSearch<TPublication>('publications', {
    // TODO: CHANGE LABEL TO VALUE
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

  if (!results.length) {
    return <></>
  }

  return <PublicationItem variant="hero" {...results[0]} />
}

export type TMostPopularPublicationProps = TProps
