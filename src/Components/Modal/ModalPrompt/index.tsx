import * as StyleBase from '../../../Styles/ModalStyle'
import * as Modal from '../style'

type Props = {
  children: JSX.Element
  modalOpened: boolean
  set_modalOpened: React.Dispatch<React.SetStateAction<boolean>>
  backdropClose?: boolean
  modalWidth: number | string
  modalHeight: number | string
  resetModal?: () => void
}

export const ModalPrompt = ({
    children,
    modalOpened,
    set_modalOpened,
    backdropClose = false,
    modalWidth,
    modalHeight,
    resetModal
  }:Props) => {

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      if(backdropClose){
        set_modalOpened(false)
        resetModal && resetModal()
      }
    }
  }

  return(
    <StyleBase.ModalBackdrop id={'backdrop'} onClick={(event) => handleBackdrop(event)}>
      <StyleBase.ModalContent modalWidth={modalWidth} modalHeight={modalHeight}>
        <Modal.Container>
          {children}
        </Modal.Container>
      </StyleBase.ModalContent>
    </StyleBase.ModalBackdrop>
  )
  }