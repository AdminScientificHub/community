import SelectComponent from 'react-select'

import React, { FunctionComponent, ReactElement } from 'react'
import { SELECT_STYLES, StyledSelect } from './Select.styled'

type TItem<T> = { label: string; value: T }

type TProps<T> = {
  value: TItem<T> | null
  options: { label: string; options: TItem<T>[] }[] | TItem<T>[]
  onChange: (item: TItem<T> | null) => void
  name?: string
  isMulti?: boolean
  placeholder?: string
}

const LabelGroup: FunctionComponent<any> = data => <span>{data.label}</span>

export function Select<T>({ onChange, value, ...props }: TProps<T>): ReactElement {
  return (
    <StyledSelect flex={false}>
      <SelectComponent
        value={value}
        className="onboarding-area-select"
        onChange={item => onChange(item)}
        maxMenuHeight={200}
        styles={SELECT_STYLES}
        formatGroupLabel={LabelGroup}
        isSearchable={false}
        isClearable
        {...props}
      />
    </StyledSelect>
  )
}

Select.defaultProps = {
  value: null,
  isMulti: false,
  placeholder: '',
  noOptionsMessage: 'No options',
}

export type TSelectItem<T> = TItem<T> | null
