import React, { FunctionComponent, useContext } from 'react'
import { CategorySidebarContext, TCategorySidebarContextContext } from './context'
import { useCategorySidebar } from './hook'

export const CategorySidebarProvider: FunctionComponent = ({ children }) => {
  const value = useCategorySidebar()

  return <CategorySidebarContext.Provider value={value}>{children}</CategorySidebarContext.Provider>
}

export const useCategorySidebarContext = (): TCategorySidebarContextContext =>
  useContext(CategorySidebarContext)
