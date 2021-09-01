import React, { FunctionComponent } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { border, color, elevation, gap, spacing, text, icon, breakpoint } from '@src/utils'

export const theme = {
  gap,
  color,
  border,
  elevation,
  spacing,
  text,
  icon,
  breakpoint,
}

export type TTheme = typeof theme

export const ThemeProvider: FunctionComponent = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
