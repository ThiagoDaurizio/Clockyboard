import * as StyleBase from '../../../Styles/ModalStyle'
import * as Modal from '../style'

type Props = {
  modalOpened: boolean
  set_modalOpened: React.Dispatch<React.SetStateAction<boolean>>
  modalHeading?: string
  backdropClose?: boolean
  modalWidth?: number | string
  modalHeight?: number | string
  modalDecision: (decision: boolean) => void
}

export const ModalConfirm = ({
    modalOpened,
    set_modalOpened,
    modalHeading = "You're has certain of this?",
    backdropClose = false,
    modalWidth = 300,
    modalHeight = 'fit-content',
    modalDecision
  }:Props) => {

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      if(backdropClose){
        set_modalOpened(false)
      }
    }
  }

  const handleDecision = (decision: boolean) => {
    if(decision){
      modalDecision(true)
      set_modalOpened(false)
    } else{
      modalDecision(false)
      set_modalOpened(false)
    }
  }

  return(
    <StyleBase.ModalBackdrop id={'backdrop'} onClick={(event) => handleBackdrop(event)}>
      <StyleBase.ModalContent modalWidth={modalWidth} modalHeight={modalHeight}>
        <Modal.Container>
          <p>{modalHeading}</p>

          <div>
            <StyleBase.ModalSuccess onClick={() => handleDecision(true)}>Accept</StyleBase.ModalSuccess>
            <StyleBase.ModalDecline onClick={() => handleDecision(false)}>Decline</StyleBase.ModalDecline>
          </div>
        </Modal.Container>
      </StyleBase.ModalContent>
    </StyleBase.ModalBackdrop>
  )
}