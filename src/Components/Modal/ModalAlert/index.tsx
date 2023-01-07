import * as StyleBase from '../../../Styles/ModalStyle'
import * as Modal from '../style'

type Props = {
  modalOpened: boolean
  set_modalOpened: React.Dispatch<React.SetStateAction<boolean>>
  modalHeading: string
  backdropClose?: boolean
  modalWidth?: number | string
  modalHeight?: number | string
}

export const ModalAlert = ({
    modalOpened,
    set_modalOpened,
    modalHeading,
    backdropClose = true,
    modalWidth = 300,
    modalHeight = 'fit-content',
  }: Props) => {

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      if(backdropClose){
        set_modalOpened(false)
      }
    }
  }

  return(
    <StyleBase.ModalBackdrop id={'backdrop'} onClick={(event) => handleBackdrop(event)}>
      <StyleBase.ModalContent modalWidth={modalWidth} modalHeight={modalHeight}>
        <Modal.Container>
          <p>{modalHeading}</p>

          <StyleBase.ModalSuccess onClick={() => set_modalOpened(false)}>OK</StyleBase.ModalSuccess>
        </Modal.Container>
      </StyleBase.ModalContent>
    </StyleBase.ModalBackdrop>
  )
}