import { Drop, Flex, Icon } from '@src/components/_core'
import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'
import { StyledCleanInputButton, StyledContainer, StyledInput, StyledLabel } from './Input.styled'

import CloseIcon from '@src/assets/icons/close.svg'
import { TSchema } from '../..'
import { TDropListProps } from '@src/components/_core/Drop/List'
import { compareText } from '@src/utils/text/searchText'

type TProps = {
  value: string
  label: string
  isActive: boolean
  placeholder: string
  onChange: (value: string) => void
  name: keyof TSchema
  changeFocusedInput: (name: keyof TSchema) => void
  focusNextField: () => void
  items: TDropListProps['items']
  onItemSelected?: (item: TDropListProps['items'][0]) => void
}

export const DefaultHeaderSearchInput: FunctionComponent<TProps> = ({
  value = '',
  label,
  placeholder,
  isActive,
  onChange,
  name,
  changeFocusedInput,
  focusNextField,
  items,
}) => {
  const [localValue, setLocalValue] = useState('')
  const [isInputFocus, setIsInputFocus] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredItems = useMemo(() => {
    return items.filter(({ value: item }) => compareText({ query: localValue, item }))
  }, [items, localValue])

  const focusInput = () => inputRef.current?.focus()
  const clearInput = () => {
    onChange('')
    setLocalValue('')
  }

  const handleInputFocus = () => {
    if (!isActive) {
      changeFocusedInput(name)
    }

    setIsInputFocus(true)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter'].includes(e.key)) {
      focusNextField()
    }
  }

  useEffect(() => {
    isActive ? focusInput() : setIsInputFocus(false)
  }, [isActive])

  useEffect(() => {
    if (value) {
      const selectedItem = items.find(item => item.value === value)

      setLocalValue(selectedItem?.label || '')
    }
  }, [items, value])

  return (
    <>
      <StyledContainer
        direction="row"
        border={{ radius: 'huge' }}
        background={isActive ? 'background' : 'none'}
        elevation={isActive ? 'large' : 'none'}
        onClick={focusInput}
        padding={{ vertical: 'medium', horizontal: 'xlarge' }}
        align="center"
        position="relative"
        isActive={isActive}
        forwardRef={containerRef}
      >
        <Flex direction="column">
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledInput
            onFocus={handleInputFocus}
            name={name}
            value={items.length ? localValue : value}
            ref={inputRef}
            placeholder={placeholder}
            onChange={e =>
              items.length ? setLocalValue(e.target.value) : onChange(e.target.value)
            }
            isActive={isActive}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyPress}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </Flex>
        {value && isActive && (
          <StyledCleanInputButton
            border={{ radius: 'huge' }}
            flex={false}
            height={2.4}
            width={2.4}
            background="light-background"
            align="center"
            justify="center"
            onClick={clearInput}
          >
            <Icon size="xxsmall" icon={CloseIcon} />
          </StyledCleanInputButton>
        )}
      </StyledContainer>
      {containerRef.current && isInputFocus && (
        <Drop
          targetMargin={12}
          dropTarget={containerRef.current}
          dropAlign={{ top: 'bottom', left: 'left' }}
          items={filteredItems}
          onItemSelected={item => {
            setLocalValue(item.label)
            onChange(item.value)
            focusNextField()
          }}
          maxHeight={500}
          maxWidth={500}
        />
      )}
    </>
  )
}

export type TInputProps = TProps
