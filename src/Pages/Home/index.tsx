import { ModalAlert } from '../../Components/Modal/ModalAlert'
import * as Style from './style'
import { useRef, useState } from 'react'
import { ModalConfirm } from '../../Components/Modal/ModalConfirm'
import { ModalPrompt } from '../../Components/Modal/ModalPrompt'
import * as StyleBase from '../../Styles/ModalStyle'
import { CompInputCamp } from '../../Components/InputCamp'
import { CompOptionBall } from '../../Components/OptionBall'
import { IoOpenOutline, IoTrashBinOutline } from "react-icons/io5";


export const PageHome = () => {
  const [text, set_text] = useState<string>('')
  const [text2, set_text2] = useState<string>('')

  return (
    <Style.Container>
      Home
    </Style.Container>
  )
}