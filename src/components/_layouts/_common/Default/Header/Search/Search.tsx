import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { DefaultHeaderSearchInput } from './_common'
import { StyledSearchBtn } from './Search.styled'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Controller, useForm } from 'react-hook-form'
import { Flex, Icon, Paragraph } from '@src/components/_core'

import SearchIcon from '@src/assets/icons/search.svg'

import { SearchTypeInput } from './Type'
import { SearchFieldsInput } from './Fields'
import { useScreenSize } from '@src/utils/hooks'
import { useRouter } from 'next/dist/client/router'
import {
  PUBLICATION_FIELD_FULL_DATA,
  PUBLICATION_TYPE_FULL_DATA,
} from '@src/components/publication/constants'
import { formatQueryParams } from '@src/utils'

type TProps = {
  exitActiveHeader: () => void
}

const schema = yup.object().shape({
  query: yup.string(),
  type: yup.string(),
  field: yup.string(),
})

export interface TSchema {
  query: string
  type: string
  field: string
}

export const DefaultHeaderSearch: FunctionComponent<TProps> = ({ exitActiveHeader }) => {
  const [focusedInput, setFocusedInput] = useState<keyof TSchema | null>('query')

  const router = useRouter()

  const { control, handleSubmit, setValue } = useForm<TSchema>({ resolver: yupResolver(schema) })
  const { isDesktop } = useScreenSize()

  const submitBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const { query: q } = router

    const field =
      PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas)
        .flat()
        .find(area => area.url === q.field)?.value || ''

    const type = PUBLICATION_TYPE_FULL_DATA.find(({ url }) => url === q.type)?.value || ''

    setValue('query', (q.q as string) || '')
    setValue('field', field)
    setValue('type', type)
  }, [router, setValue])

  const onSubmit = ({ query, field, type }: TSchema) => {
    if (!query && !field && !type) {
      return
    }

    const formattedType = type
      ? PUBLICATION_TYPE_FULL_DATA.find(({ value }) => value === type)?.url
      : null

    const formattedField = field
      ? PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas)
          .flat()
          .find(({ value }) => value === field)?.url
      : null

    exitActiveHeader()

    router.push(
      formatQueryParams('/search', [
        { query: 'q', value: encodeURI(query.toLocaleLowerCase()) },
        { query: 'field', value: formattedField },
        { query: 'type', value: formattedType },
      ]),
    )
  }

  const focusNextField = () => {
    switch (focusedInput) {
      case 'query':
        setFocusedInput('type')
        return
      case 'type':
        setFocusedInput('field')
        return
      case 'field':
        setFocusedInput(null)
        submitBtnRef.current?.focus()
        return
    }
  }

  return (
    <Flex
      flex={false}
      height={6.6}
      border={{ radius: 'huge', size: 'xxsmall', color: 'border' }}
      background="light-background"
      align="center"
    >
      <Controller
        control={control}
        name="query"
        render={({ field: { value, onChange } }) => (
          <DefaultHeaderSearchInput
            value={value}
            onChange={onChange}
            placeholder="What are you searching ?"
            label="Search"
            name="query"
            isActive={focusedInput === 'query'}
            changeFocusedInput={setFocusedInput}
            focusNextField={focusNextField}
            items={[]}
          />
        )}
      />
      <SearchTypeInput
        control={control}
        focusedInput={focusedInput}
        changeFocusedInput={setFocusedInput}
        focusNextField={focusNextField}
      />
      <SearchFieldsInput
        control={control}
        focusedInput={focusedInput}
        changeFocusedInput={setFocusedInput}
        focusNextField={focusNextField}
      />

      <Flex flex={false}>
        <StyledSearchBtn
          onClick={handleSubmit(onSubmit)}
          onFocus={() => setFocusedInput(null)}
          tabIndex={0}
          ref={submitBtnRef}
        >
          <Icon size="small" color="light-text" icon={SearchIcon} />
          {isDesktop && (
            <Paragraph color="light-text" weight="semi-bold">
              Rechercher
            </Paragraph>
          )}
        </StyledSearchBtn>
      </Flex>
    </Flex>
  )
}
