import { PublicationItem } from '@src/components/publication'
import { TFullDataItem, TPublication, TPublicationField } from '@src/components/publication/_types'
import { useAlgoliaSearch } from '@src/utils/hooks'
import React, { FunctionComponent, useEffect } from 'react'

type TProps = {
  field: TFullDataItem<TPublicationField>
  updateMostPopularPublication: (publication: TPublication) => void
}

export const MostPopularPublication: FunctionComponent<TProps> = ({
  field,
  updateMostPopularPublication,
}) => {
  const { results } = useAlgoliaSearch<TPublication>('publications', {
    // TODO: CHANGE LABEL TO VALUE
    facetFilters: [`fields.value: ${field.label}`, 'status: PUBLISHED'],
    hitsPerPage: 1,
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
