import { TPublication } from '@src/components/publication/_types'

export type TUser = {
  id: string
  uid: string
  firstName: string
  title: string
  lastName: string
  email: string
  fieldOfStudies: { label: string; value: string }[]
  isOnboardingFinished: boolean
  publications: TPublication[]
}
