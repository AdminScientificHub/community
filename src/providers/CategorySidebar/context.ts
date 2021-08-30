import { TPublication } from '@src/components/publication/_types'
import { noop } from 'lodash'
import { createContext } from 'react'

export type TTopic = { label: string; url: string }
export type TSidebarSection = {
  title: string
  type: 'publication' | 'nav'
  items?: { label: string; url: string }[]
  publications?: TPublication[]
}

type TContext = {
  title: string
  description: string
  sections: TSidebarSection[]
  setTitle: (title: string) => void
  setDescription: (dzscription: string) => void
  setSections: (sections: TSidebarSection[]) => void
}

const initialValue: TContext = {
  title: '',
  description: '',
  sections: [],
  setTitle: noop,
  setDescription: noop,
  setSections: noop,
}

export const CategorySidebarContext = createContext(initialValue)

export type TCategorySidebarContextContext = TContext
