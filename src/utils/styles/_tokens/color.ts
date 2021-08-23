export type TColorTokenEnum =
  | 'none'
  | 'primary'
  | 'secondary'
  | 'heading'
  | 'text'
  | 'dark-text'
  | 'light-text'
  | 'border'
  | 'background'
  | 'dark-background'
  | 'light-background'

export const COLOR_TO_VALUE: { [key in TColorTokenEnum]: string } = {
  none: 'transparent',
  primary: '#1A8917',
  secondary: '#C4E2FF',
  heading: '#292929',
  text: '#757575',
  'dark-text': '#292929',
  'light-text': '#FFFFFF',
  border: '#E6E6E6',
  background: '#FFFFFF',
  'dark-background': '#000000',
  'light-background': '#F2F2F2',
}
