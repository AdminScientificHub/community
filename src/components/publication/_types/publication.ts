import firebase from 'firebase/app'
import { TUser } from '@src/components/user/_types'

export type TAuthorType = 'PRINCIPAL' | 'SECONDARY'
export type TPublicationStatus = 'DRAFT' | 'PUBLISHED'
export type TPublicationType = 'ARTICLE' | 'PAPER' | 'THESIS'

export type TPublicationField =
  | 'MATHEMATICS'
  | 'COMPUTER_AND_INFORMATION_SCIENCES'
  | 'PHYSICAL_SCIENCES'
  | 'CHEMICAL_SCIENCES'
  | 'EARTH_AND_RELATED_ENVIRONMENTAL_SCIENCES'
  | 'BIOLOGICAL_SCIENCES'
  | 'OTHER_NATURAL_SCIENCES'
  | 'CIVIL_ENGINEERING'
  | 'ELECTRICAL_ENGINEERING_AND_ELECTRONIC_ENGINEERING_AND_INFORMATION_ENGINEERING'
  | 'MECHANICAL_ENGINEERING'
  | 'MATERIALS_ENGINEERING'
  | 'MEDICAL_ENGINEERING'
  | 'ENVIRONMENTAL_ENGINEERING'
  | 'SYSTEMS_ENGINEERING'
  | 'ENIRONMENTAL_BIOTECHNOLOGY'
  | 'INDUSTRIAL_BIOTECHNOLOGY'
  | 'NANO_TECHNOLOGY'
  | 'OTHER_ENGINEERING_AND_TECHNOLOGIES'
  | 'BASIC_MEDICINE'
  | 'CLINICAL_MEDICINE'
  | 'HEALTH_SCIENCES'
  | 'HEALTH_BIOTECHNOLOGY'
  | 'OTHER_MEDICAL_SCIENCES'
  | 'AGRICULTURE_AND_FORESTRY_AND_FISHERIES'
  | 'ANIMAL_AND_DAIRY_SCIENCE'
  | 'VETERINARY_SCIENCE'
  | 'AGRICULTURAL_BIOTECHNOLOGY'
  | 'OTHER_AGRICULTURAL_SCIENCES'
  | 'PSYCHOLOGY'
  | 'ECONOMICS_AND_BUSINESS'
  | 'EDUCATIONAL_SCIENCES'
  | 'SOCIOLOGY'
  | 'LAW'
  | 'POLITICAL_SCIENCE'
  | 'SOCIAL_AND_ECONOMIC_GEOGRAPHY'
  | 'MEDIA_AND_COMMUNICATIONS'
  | 'OTHER_SOCIAL_SCIENCES'
  | 'HISTORY_AND_ARCHAEOLOGY'
  | 'LANGUAGES_AND_LITERATURE'
  | 'PHISOLOPHY_AND_ETHICS_AND_RELIGION'
  | 'ARTS_AND_HISTORY_OF_ARTS_AND_PERFORMING_ARTS_AND_MUSIC'
  | 'OTHER_HUMANITIES'

export type TPublication = {
  id: string
  authors: ({ type: TAuthorType } & TUser)[]
  content: string
  status: TPublicationStatus
  tags: { label: string; value: string }[]
  fields: { label: string; value: string }[]
  title: string
  createdAt: firebase.firestore.Timestamp
  publishedAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
  user: string
  description: string
  coverUrl: string
  type: TPublicationType
}

export type TPublicationStats = {
  reads: number
}

export type TFullDataItem<T> = {
  value: T
  label: string
  coverUrl: string
  url: string
  description: string
}

export type TPublicationFieldData = {
  title: string
  areas: TFullDataItem<TPublicationField>[]
}
