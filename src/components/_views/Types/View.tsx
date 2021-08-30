import { PUBLICATION_TYPE_FULL_DATA } from '@src/components/publication/constants'
import { Card } from '@src/components/_common'
import { Flex, Heading } from '@src/components/_core'
import { useScreenSize } from '@src/utils/hooks'
import React, { FunctionComponent } from 'react'

type TProps = {}

export const TypesView: FunctionComponent<TProps> = () => {
  const { isSmallTablet, isMobile, isTablet } = useScreenSize()

  return (
    <Flex
      direction="column"
      maxWidth={100}
      margin={{ horizontal: isMobile || isSmallTablet || isTablet ? 'none' : 'xxlarge' }}
      gap="xxlarge"
    >
      <Heading variant="page-title" color="dark-text">
        Explore document types
      </Heading>
      <Flex direction="column" gap="xxlarge" margin={{ bottom: 'huge' }}>
        <Flex direction="column" gap="large">
          <Heading variant="section-title" color="dark-text">
            All document types
          </Heading>
          <Flex
            direction="row"
            margin={{ horizontal: isSmallTablet || isTablet ? 'medium' : 'xxlarge' }}
            gap="xlarge"
            justify="center"
            wrap
          >
            {PUBLICATION_TYPE_FULL_DATA.map(type => (
              <Card
                key={type.value}
                title={type.label}
                coverUrl={type.coverUrl}
                href={`/type/${type.url}`}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export type TTypesViewProps = TProps
