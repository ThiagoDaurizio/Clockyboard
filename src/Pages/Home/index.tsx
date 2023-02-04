import { ModalAlert } from '../../Components/Modal/ModalAlert'
import * as Style from './style'
import { useRef, useState } from 'react'
import { ModalConfirm } from '../../Components/Modal/ModalConfirm'
import { ModalPrompt } from '../../Components/Modal/ModalPrompt'
import * as StyleBase from '../../Styles/ModalStyle'

export const PageHome = () => {
  const [text, set_text] = useState<any>()
  const textareaRef: any = useRef()

  return(
    <Style.Container>
      <button className='info' onClick={() => console.log(textareaRef.current)}>INFO</button>
      <p>{text}</p>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(event) => set_text(event.target.value)}
      />
    </Style.Container>
  )
}