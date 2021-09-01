import styled from '@emotion/styled'
import { theme } from '@src/providers'
import { rgba } from 'emotion-rgba'
import { GroupTypeBase, Styles } from 'react-select'
import { Flex } from '..'

export const StyledSelect = styled(Flex)(() => {
  return {
    label: {
      marginBottom: '.8rem',
      fontSize: '1.4rem',
      lineHeight: '1',
      fontWeight: 700,
    },

    '.onboarding-area-select': {
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
    },
  }
})

export const SELECT_STYLES: Partial<Styles<any, boolean, GroupTypeBase<any>>> = {
  indicatorsContainer: provided => {
    return {
      ...provided,
    }
  },
  groupHeading: provided => ({
    ...provided,
    fontWeight: theme.text.weight.bold,
  }),
  placeholder: provided => ({
    ...provided,
    color: rgba(theme.color['dark-text'], 0.5),
    position: 'initial',
    top: 0,
    transform: 'none',
  }),
  control: (provided, ...props) => {
    const value = props[0].getValue()[0]

    const border = value
      ? `${theme.border.size.xsmall} solid ${theme.color['dark-text']}`
      : `${theme.border.size.xxsmall} solid ${theme.color.border}`

    return {
      ...provided,
      border,
      cursor: 'pointer',
      borderRadius: theme.border.radius.huge,
      maxHeight: '3.6rem',

      '&:hover': {
        border,
        boxShadow: 'none',
      },

      '&:active': {
        border,
        boxShadow: 'none',
      },
    }
  },
  singleValue: (_, ...props) => {
    const value = props[0].getValue()[0]

    return {
      color: value ? theme.color['dark-text'] : theme.color.text,
    }
  },
  valueContainer: provided => ({
    ...provided,
    padding: `0 1.6rem`,
  }),
  option: provided => ({
    ...provided,
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    minWidth: '20rem',
  }),
}
