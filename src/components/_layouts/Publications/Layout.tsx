import { Flex } from '@src/components/_core'
import { useScreenSize } from '@src/utils/hooks'
import React, { FunctionComponent } from 'react'
import { DefaultLayout } from '../_common'
import { StyledContainer, StyledSeparator } from './Layout.styled'
import { PublicationLayoutSidebar } from './Sidebar'

type TProps = {}

export const PublicationsLayout: FunctionComponent<TProps> = ({ children }) => {
  const { isDesktop } = useScreenSize()

  return (
    <>
      <DefaultLayout withFooter={false}>
        <StyledContainer direction="row" align="start">
          <Flex direction="column" gap="xxlarge">
            {children}
          </Flex>
          {isDesktop && (
            <>
              <StyledSeparator
                flex={false}
                padding={{ left: 'xxlarge' }}
                margin={{ right: 'xxlarge' }}
              />
              <PublicationLayoutSidebar />
            </>
          )}
        </StyledContainer>
      </DefaultLayout>
    </>
  )
}

export type TPublicationsLayoutProps = TProps
