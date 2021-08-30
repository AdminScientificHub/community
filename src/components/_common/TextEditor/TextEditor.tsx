import React, { FunctionComponent } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { EXTENSIONS } from './constant'
import { StyledContainer } from './TextEditor.styled'

type TProps = {
  content: string
  editable?: boolean
}

export const TextEditor: FunctionComponent<TProps> = ({ content, editable }) => {
  const editor = useEditor({
    extensions: EXTENSIONS,
    editable,
    content,
  })

  return (
    <StyledContainer>
      <EditorContent editor={editor} />
    </StyledContainer>
  )
}

TextEditor.defaultProps = {
  editable: true,
}

export type TTextEditorProps = TProps
