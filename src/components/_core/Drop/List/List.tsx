import React, { FunctionComponent } from 'react'

import { DropListItem } from './Item/Item'
import { StyledContainer } from './List.styled'

type TProps = {
  items: { label: string; value: string }[]
  onItemSelected: (value: { label: string; value: string }) => void
}

export const DropList: FunctionComponent<TProps> = ({ items, onItemSelected }) => {
  return (
    <StyledContainer direction="column">
      {items.map(item => (
        <DropListItem item={item} key={item.value} onItemSelected={() => onItemSelected(item)} />
      ))}
    </StyledContainer>
  )
}

export type TDropListProps = TProps
