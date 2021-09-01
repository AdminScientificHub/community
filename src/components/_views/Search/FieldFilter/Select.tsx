import { PUBLICATION_FIELD_FULL_DATA } from '@src/components/publication/constants'
import {
  TFullDataItem,
  TPublicationField,
  TPublicationType,
} from '@src/components/publication/_types'
import { Select, TSelectItem } from '@src/components/_core'
import { formatQueryParams } from '@src/utils'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent } from 'react'

type TProps = {
  params: {
    query: string
    field: TFullDataItem<TPublicationField> | undefined
    type: TFullDataItem<TPublicationType> | undefined
  }
}

export const FieldFilterSelect: FunctionComponent<TProps> = ({ params }) => {
  const router = useRouter()

  const onDocumentFieldChange = (item: TSelectItem<TPublicationField>) => {
    const formattedField = PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas)
      .flat()
      .find(({ value }) => item?.value === value)?.url

    const query = params.query ? encodeURI(params.query.toLocaleLowerCase()) : ''

    router.push(
      formatQueryParams('/search', [
        { query: 'q', value: query },
        { query: 'field', value: formattedField },
        { query: 'type', value: params.type?.url },
      ]),
    )
  }

  return (
    <Select<TPublicationField>
      value={params.field}
      placeholder="Area of expertise"
      onChange={onDocumentFieldChange}
      options={PUBLICATION_FIELD_FULL_DATA.map(field => ({
        label: field.title,
        options: field.areas.map(area => ({ label: area.label, value: area.value })),
      })).map(field => ({
        ...field,
        options: field.options.filter(option => option.value !== params.field?.value),
      }))}
    />
  )
}

export type TFieldFilterSelectProps = TProps
