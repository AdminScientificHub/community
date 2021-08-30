import { Flex, Paragraph, Image, Link } from '@src/components/_core'
import React, { FunctionComponent } from 'react'
import { StyledContentContainer } from './Card.styled'

type TProps = {
  title: string
  coverUrl: string
  href: string
}

export const Card: FunctionComponent<TProps> = ({ title, coverUrl, href }) => {
  return (
    <Link href={href}>
      <Flex direction="column" width={28} height={28}>
        <StyledContentContainer
          padding={{ horizontal: 'large' }}
          direction="row"
          justify="between"
          align="center"
        >
          <Paragraph size="xlarge" color="dark-text" weight="bold">
            {title}
          </Paragraph>
        </StyledContentContainer>
        <Image src={coverUrl} alt={title} height={18} />
      </Flex>
    </Link>
  )
}

export type TCardProps = TProps
