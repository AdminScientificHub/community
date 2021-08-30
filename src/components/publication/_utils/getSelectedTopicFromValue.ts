import { PUBLICATION_FIELD_FULL_DATA } from '../constants'
import { TPublicationFieldData } from '../_types'

export const getSelectedTopicFromName = (fieldValue: string): TPublicationFieldData => {
  const [selectedTopic] = PUBLICATION_FIELD_FULL_DATA.filter(({ areas }) =>
    areas.find(area => area.value === fieldValue),
  )

  return selectedTopic
}
