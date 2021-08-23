export type TBorderTokenEnum = 'none' | 'xxsmall' | 'xsmall' | 'medium' | 'large' | 'xlarge'

export const BORDER_RADIUS_TO_VALUE: { [key in TBorderTokenEnum]: number } = {
  none: 0,
  xxsmall: 0.2,
  xsmall: 0.4,
  medium: 0.8,
  large: 1.6,
  xlarge: 99,
}

export const BORDER_SIZE_TO_VALUE: { [key in TBorderTokenEnum]: number } = {
  none: 0,
  xxsmall: 0.1,
  xsmall: 0.2,
  medium: 0.4,
  large: 0.8,
  xlarge: 1.6,
}
