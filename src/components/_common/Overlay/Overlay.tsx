import React, { FunctionComponent, useEffect } from 'react'
import { StyledContainer } from './Overlay.styled'

type TProps = {
  isActive: boolean
  closeOverlay: () => void
  height?: string | number
  top?: string | number
}

export const Overlay: FunctionComponent<TProps> = ({ isActive, closeOverlay, height, top }) => {
  useEffect(() => {
    const closeOverlayOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeOverlay()

    if (isActive) {
      document.addEventListener('keydown', closeOverlayOnEscape)
    } else {
      document.removeEventListener('keydown', closeOverlayOnEscape)
    }

    return () => document.removeEventListener('keydown', closeOverlayOnEscape)
  }, [closeOverlay, isActive])

  return <StyledContainer top={top} height={height} isActive={isActive} onClick={closeOverlay} />
}

export type TOverlayProps = TProps
