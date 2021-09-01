import { PublicationItem } from '@src/components/publication'
import { Divider } from '@src/components/_common'
import { Flex, Heading, Link, Paragraph } from '@src/components/_core'
import { useCategorySidebarContext } from '@src/providers'

import React, { FunctionComponent } from 'react'
import { StyledContainer } from './Sidebar.styled'

type TProps = {}

export const CategorySidebar: FunctionComponent<TProps> = () => {
  const { title, description, sections } = useCategorySidebarContext()

  return (
    <StyledContainer maxWidth={28} direction="column" gap="xxlarge">
      <Flex direction="column" gap="xxsmall" flex={false}>
        {(title || description) && (
          <>
            {title && (
              <Heading variant="h2" color="dark-text">
                {title}
              </Heading>
            )}
            {description && <Paragraph size="small">{description}</Paragraph>}
          </>
        )}
      </Flex>
      {sections.map(section => {
        if (section.type === 'nav' && section.items?.length) {
          return (
            <Flex direction="column" gap="large" flex={false}>
              <Flex direction="column" gap="xsmall" flex={false}>
                <Heading variant="h3" color="dark-text" weight="bold">
                  {section.title}
                </Heading>
                <Divider />
              </Flex>
              <Flex direction="column" gap="small" flex={false}>
                {section.items.map(item => (
                  <Link variant="primary" key={item.label} href={item.url}>
                    <Heading variant="h3">{item.label}</Heading>
                  </Link>
                ))}
              </Flex>
            </Flex>
          )
        }

        if (section.type === 'publication' && section.publications?.length) {
          return (
            <Flex direction="column" gap="large" flex={false}>
              <Flex direction="column" gap="xsmall">
                <Heading variant="h3" color="dark-text" weight="bold">
                  {section.title}
                </Heading>
                <Divider />
              </Flex>
              <Flex direction="column" gap="medium">
                {section.publications.map(publication => (
                  <PublicationItem variant="small" key={publication.id} {...publication} />
                ))}
              </Flex>
            </Flex>
          )
        }
      })}
    </StyledContainer>
  )
}

export type TSidebarProps = TProps
