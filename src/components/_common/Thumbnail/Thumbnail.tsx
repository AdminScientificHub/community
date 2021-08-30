import { Paragraph } from '@src/components/_core'
import React, { FunctionComponent, useMemo } from 'react'
import { SIZE_TO_THUMBNAIL, StyledContainer, TThumbnailSize } from './Thumbnail.styled'

type TProps = {
  firstName?: string
  size?: TThumbnailSize
}

export const Thumbnail: FunctionComponent<TProps> = ({ firstName, size }) => {
  const { container, paragraph } = useMemo(() => {
    return SIZE_TO_THUMBNAIL[size as TThumbnailSize]
  }, [size])

  return (
    <StyledContainer
      flex={false}
      width={2}
      height={2}
      {...container}
      border={{ radius: 'huge' }}
      align="center"
      justify="center"
    >
      {firstName && (
        <Paragraph color="light-text" {...paragraph}>
          {firstName.charAt(0)}
        </Paragraph>
      )}
    </StyledContainer>
  )
}

Thumbnail.defaultProps = {
  size: 'regular',
}

export type TThumbnailProps = TProps
