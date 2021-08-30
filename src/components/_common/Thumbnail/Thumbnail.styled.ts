import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'
import { TFlexStylesProps } from '@src/components/_core/Flex/Flex.styled'
import { TParagraphStylesProps } from '@src/components/_core/Paragraph/Paragraph.styled'

export type TThumbnailSize = 'regular' | 'small' | 'large' | 'huge'

export const SIZE_TO_THUMBNAIL: {
  [key in TThumbnailSize]: {
    container: Partial<TFlexStylesProps>
    paragraph: Partial<TParagraphStylesProps>
  }
} = {
  small: {
    container: {
      width: 2,
      height: 2,
    },
    paragraph: {
      size: 'xxsmall',
    },
  },
  regular: {
    container: {
      width: 3.2,
      height: 3.2,
    },
    paragraph: {
      size: 'xlarge',
    },
  },
  large: {
    container: {
      width: 4.8,
      height: 4.8,
    },
    paragraph: {
      size: 'xxlarge',
    },
  },
  huge: {
    container: {
      width: 8,
      height: 8,
    },
    paragraph: {
      size: 'xxxlarge',
    },
  },
}

export const StyledContainer = styled(Flex)(() => {
  return {
    backgroundColor: '#FF8577',
  }
})
