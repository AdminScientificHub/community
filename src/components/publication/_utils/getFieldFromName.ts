import { PUBLICATION_FIELD_FULL_DATA } from '../constants'
import { TFullDataItem, TPublicationField } from '../_types'

export const getFieldFromName = (
  fieldName: string,
): TFullDataItem<TPublicationField> | undefined => {
  const allAreas = PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas).flat()

  return allAreas.find(area => area.url === fieldName)
}
