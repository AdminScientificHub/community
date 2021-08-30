import React, { FunctionComponent } from 'react'
import { DefaultHeaderSearchInput } from '../_common'
import { Controller, Control } from 'react-hook-form'
import { TSchema } from '..'

import { PUBLICATION_FIELD_FULL_DATA } from '@src/components/publication/constants'

type TProps = {
  control: Control<TSchema, object>
  focusedInput: keyof TSchema | null
  changeFocusedInput: (name: keyof TSchema) => void
  focusNextField: () => void
}

export const SearchFieldsInput: FunctionComponent<TProps> = ({
  control,
  focusedInput,
  changeFocusedInput,
  focusNextField,
}) => {
  return (
    <Controller
      control={control}
      name="field"
      render={({ field: { value, onChange } }) => (
        <DefaultHeaderSearchInput
          value={value}
          onChange={onChange}
          placeholder="Mathematics..."
          label="Field"
          name="field"
          items={PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas).flat()}
          isActive={focusedInput === 'field'}
          changeFocusedInput={changeFocusedInput}
          focusNextField={focusNextField}
          onItemSelected={item => onChange(item)}
        />
      )}
    />
  )
}

export type TSearchFieldsInputProps = TProps
