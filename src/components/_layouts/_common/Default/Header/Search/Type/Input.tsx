import React, { FunctionComponent } from 'react'
import { DefaultHeaderSearchInput } from '../_common'
import { Controller, Control } from 'react-hook-form'
import { TSchema } from '..'
import { PUBLICATION_TYPE_FULL_DATA } from '@src/components/publication/constants'

type TProps = {
  control: Control<TSchema, object>
  focusedInput: keyof TSchema | null
  changeFocusedInput: (name: keyof TSchema) => void
  focusNextField: () => void
}

export const SearchTypeInput: FunctionComponent<TProps> = ({
  control,
  focusedInput,
  changeFocusedInput,
  focusNextField,
}) => {
  return (
    <Controller
      control={control}
      name="type"
      render={({ field: { value, onChange } }) => {
        console.log('value', value)
        return (
          <DefaultHeaderSearchInput
            value={value}
            onChange={onChange}
            placeholder="Paper, article ..."
            label="Type"
            name="type"
            isActive={focusedInput === 'type'}
            changeFocusedInput={changeFocusedInput}
            focusNextField={focusNextField}
            items={PUBLICATION_TYPE_FULL_DATA}
            onItemSelected={item => onChange(item)}
          />
        )
      }}
    />
  )
}

export type TSearchTypeInputProps = TProps
