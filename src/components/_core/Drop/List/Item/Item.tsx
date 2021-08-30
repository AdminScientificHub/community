import { Flex } from '@src/components/_core'
import { Paragraph } from '@src/components/_core/Paragraph'
import { useHover } from '@src/utils/hooks/useHover'
import React, { FunctionComponent } from 'react'
import { TDropListProps } from '..'

type TProps = {
  item: TDropListProps['items'][0]
  onItemSelected: () => void
}

export const DropListItem: FunctionComponent<TProps> = ({ item, onItemSelected }) => {
  const { isHover, hoverProps } = useHover()

  return (
    <Flex
      height={4.8}
      flex={false}
      align="center"
      padding={{ right: 'xlarge', left: 'xlarge' }}
      onClick={onItemSelected}
      background={isHover ? 'light-background' : 'background'}
      {...hoverProps}
    >
      <Paragraph ellipsis color="dark-text" title={item.label}>
        {item.label}
      </Paragraph>
    </Flex>
  )
}

export type TItemProps = TProps
