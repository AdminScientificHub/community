import { PUBLICATION_FIELD_FULL_DATA } from '@src/components/publication/constants'
import { Card } from '@src/components/_common'
import { Flex, Heading } from '@src/components/_core'
import { useScreenSize } from '@src/utils/hooks'
import React, { FunctionComponent } from 'react'

type TProps = {}

export const FieldsView: FunctionComponent<TProps> = () => {
  const { isSmallTablet, isMobile, isTablet } = useScreenSize()

  return (
    <Flex
      direction="column"
      maxWidth={100}
      margin={{ horizontal: isMobile || isSmallTablet || isTablet ? 'none' : 'xxlarge' }}
      gap="xxlarge"
    >
      <Heading variant="page-title" color="dark-text">
        Explore fields
      </Heading>
      <Flex direction="column" gap="xxlarge" margin={{ bottom: 'huge' }}>
        {PUBLICATION_FIELD_FULL_DATA.map(field => (
          <Flex key={field.title} direction="column" gap="large">
            <Heading variant="section-title" color="dark-text">
              {field.title}
            </Heading>

            <Flex
              direction="row"
              margin={{ horizontal: isSmallTablet || isTablet ? 'medium' : 'xxlarge' }}
              gap="xlarge"
              wrap
              justify="center"
            >
              {field.areas.map(area => (
                <Card
                  key={area.value}
                  title={area.label}
                  coverUrl={area.coverUrl}
                  href={`/field/${area.url}`}
                />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export type TFieldsViewProps = TProps
