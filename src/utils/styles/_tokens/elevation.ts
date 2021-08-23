import { rgba } from 'emotion-rgba'

export type TElevationTokenEnum = 'none' | 'xxsmall' | 'xsmall' | 'medium' | 'large' | 'xlarge'

export const ELEVATION_TO_VALUE: { [key in TElevationTokenEnum]: string } = {
  none: 'none',
  xxsmall: `0 0.1rem 0.2rem ${rgba('#000', 0.08)}`,
  xsmall: '',
  medium: '',
  large: '',
  xlarge: `0 0.6rem 2rem ${rgba('#000', 0.2)}`,
}
