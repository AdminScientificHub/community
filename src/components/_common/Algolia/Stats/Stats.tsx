import React, { FunctionComponent } from 'react'
import { connectStats } from 'react-instantsearch-dom'
import { StatsProvided } from 'react-instantsearch-core'
import { useEffect } from 'react'

type TProps = {
  getNbrOfHit?: (hitNb: number) => void
} & StatsProvided

const AlgoliaInstantSearchStatsComponent: FunctionComponent<TProps> = ({ getNbrOfHit, nbHits }) => {
  useEffect(() => {
    if (getNbrOfHit) {
      getNbrOfHit(nbHits)
    }
  }, [getNbrOfHit, nbHits])

  return <></>
}

export type TAlgoliaInstantSearchStatsProps = TProps

export const AlgoliaInstantSearchStats = connectStats(AlgoliaInstantSearchStatsComponent)
