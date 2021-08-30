export type TColorTokenEnum =
  | 'none'
  | 'primary'
  | 'dark-primary'
  | 'secondary'
  | 'heading'
  | 'text'
  | 'dark-text'
  | 'light-text'
  | 'border'
  | 'background'
  | 'dark-background'
  | 'light-background'
  | 'btn-primary'
  | 'btn-secondary'
  | 'link-primary'
  | 'link-secondary'

export const COLOR_TO_VALUE: { [key in TColorTokenEnum]: string } = {
  none: 'transparent',
  primary: '#1A8917',
  'dark-primary': '#155F13',
  secondary: '#C4E2FF',
  heading: '#292929',
  text: '#757575',
  'dark-text': '#292929',
  'light-text': '#FFFFFF',
  border: '#E6E6E6',
  background: '#FFFFFF',
  'dark-background': '#000000',
  'light-background': '#F2F2F2',
  'btn-primary': '#191919',
  'btn-secondary': '#F2F2F2',
  'link-primary': '#222222',
  'link-secondary': '#1A8917',
}

export const color = COLOR_TO_VALUE
