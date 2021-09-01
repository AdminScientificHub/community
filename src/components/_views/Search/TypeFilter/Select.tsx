import { PUBLICATION_TYPE_FULL_DATA } from '@src/components/publication/constants'
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

export const TypeFilterSelect: FunctionComponent<TProps> = ({ params }) => {
  const router = useRouter()

  const onDocumentTypeChange = (item: TSelectItem<TPublicationType>) => {
    const formattedType = PUBLICATION_TYPE_FULL_DATA.find(({ value }) => value === item?.value)?.url
    const query = params.query ? encodeURI(params.query.toLocaleLowerCase()) : ''

    router.push(
      formatQueryParams('/search', [
        { query: 'q', value: query },
        { query: 'field', value: params.field?.url },
        { query: 'type', value: formattedType },
      ]),
    )
  }

  return (
    <Select<TPublicationType>
      value={params.type}
      placeholder="Document Type"
      onChange={onDocumentTypeChange}
      options={PUBLICATION_TYPE_FULL_DATA.map(type => ({
        label: type.label,
        value: type.value,
      })).filter(type => type.value !== params.type?.value)}
    />
  )
}

export type TTypeFilterSelectProps = TProps
