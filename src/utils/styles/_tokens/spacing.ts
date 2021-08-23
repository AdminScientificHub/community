export type TSpacingTokenEnum =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export const SPACING_TO_VALUE: { [key in TSpacingTokenEnum]: number } = {
  none: 0,
  xxsmall: 0.4,
  xsmall: 0.8,
  medium: 1.6,
  large: 2.4,
  xlarge: 3.2,
  xxlarge: 6.4,
}
