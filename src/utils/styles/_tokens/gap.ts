export type TGapTokenEnum = 'none' | 'xxsmall' | 'xsmall' | 'medium' | 'large' | 'xlarge'

export const GAP_TO_SIZE: { [key in TGapTokenEnum]: number } = {
  none: 0,
  xxsmall: 0.4,
  xsmall: 0.8,
  medium: 1.6,
  large: 2.4,
  xlarge: 3.2,
}
