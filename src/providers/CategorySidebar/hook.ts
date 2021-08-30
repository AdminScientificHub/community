import { shuffleArray } from '@src/utils'
import { useCallback, useState } from 'react'
import { TCategorySidebarContextContext, TSidebarSection } from './context'

export const useCategorySidebar = (): TCategorySidebarContextContext => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [sections, setSections] = useState<TSidebarSection[]>([])

  const updateSections = useCallback((newSections: TSidebarSection[]) => {
    setSections(
      newSections.map(section => {
        switch (section.type) {
          case 'nav':
            return { ...section, items: shuffleArray(section.items || []).slice(0, 5) }
          case 'publication':
            return {
              ...section,
              publications: shuffleArray(section.publications || []).slice(0, 5),
            }
        }
      }),
    )
  }, [])

  return {
    title,
    description,
    sections,
    setSections: updateSections,
    setTitle,
    setDescription,
  }
}
