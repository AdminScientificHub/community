import {
  PUBLICATION_FIELD_FULL_DATA,
  PUBLICATION_TYPE_FULL_DATA,
} from '@src/components/publication/constants'
import {
  TFullDataItem,
  TPublicationStatus,
  TPublicationType,
} from '@src/components/publication/_types'
import { Divider } from '@src/components/_common'
import { Flex, Link, Heading, Button } from '@src/components/_core'
import { shuffleArray } from '@src/utils'

import React, { FunctionComponent, useMemo } from 'react'
import { StyledContainer } from './Sidebar.styled'

type TProps = {}

export const PublicationLayoutSidebar: FunctionComponent<TProps> = () => {
  const allPublicationTypes: TFullDataItem<TPublicationType>[] = useMemo(() => {
    return shuffleArray(PUBLICATION_TYPE_FULL_DATA).slice(0, 5)
  }, [])

  const allPublicationFields: TFullDataItem<TPublicationStatus>[] = useMemo(() => {
    return shuffleArray(PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas).flat()).slice(0, 5)
  }, [])

  return (
    <StyledContainer width={32.5} flex={false} direction="column" gap="xxlarge">
      <Flex
        direction="column"
        flex={false}
        padding="large"
        background={{ opacity: 0.5, color: 'secondary' }}
        gap="large"
        align="start"
      >
        <Heading variant="h3">Write on Scientifichub</Heading>
        <Flex direction="column" gap="small">
          <Link href="/">New writer FAQ</Link>
          <Link href="/">Expert writing advice</Link>
        </Flex>
        <Button variant="primary" radius="huge">
          Start Writing
        </Button>
      </Flex>
      <Flex flex={false} direction="column" gap="large">
        <Heading variant="h3">Document type</Heading>
        <Flex direction="row" gap="xsmall" wrap>
          {allPublicationTypes.map(publicationType => (
            <Link key={publicationType.value} href={`/type/${publicationType.url}`}>
              <Button variant="secondary" radius="huge">
                {publicationType.label}
              </Button>
            </Link>
          ))}
        </Flex>
        {PUBLICATION_TYPE_FULL_DATA.length > 5 && (
          <Link href="/types" variant="secondary">
            See all types
          </Link>
        )}
      </Flex>
      <Flex flex={false} direction="column" gap="large">
        <Heading variant="h3">Field of study</Heading>
        <Flex direction="row" gap="xsmall" wrap>
          {allPublicationFields.map(field => (
            <Link key={field.value} href={`/field/${field.url}`}>
              <Button variant="secondary" radius="huge">
                {field.label}
              </Button>
            </Link>
          ))}
        </Flex>
        {PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas).flat().length > 5 && (
          <Link href="/fields" variant="secondary">
            See all fields
          </Link>
        )}
      </Flex>
      <Divider />
      <Flex flex={false} direction="row" gap="large">
        <Link variant="footer" href="/">
          Help
        </Link>
        <Link variant="footer" href="/">
          About
        </Link>
        <Link variant="footer" href="/">
          Contact Us
        </Link>
      </Flex>
    </StyledContainer>
  )
}

export type TPublicationLayoutSidebarProps = TProps
