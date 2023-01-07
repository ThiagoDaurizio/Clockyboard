import * as CoreStyle from '../../Styles/ModalStyle'

type Props = {
  children: any
  modalOpened: boolean
  set_modalOpened: React.Dispatch<React.SetStateAction<boolean>>
  modalWidth?: number | undefined
  modalHeight?: number | undefined
  backdropClose?: boolean
  resetModal: () => void
}

export const CompModal = ({ 
  children, 
  modalOpened, 
  set_modalOpened, 
  modalWidth, 
  modalHeight,
  backdropClose = true,
  resetModal
}: Props) => {

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      if(backdropClose){
        set_modalOpened(false)
        
        resetModal()
      }
    }
  }

  return(
    <CoreStyle.ModalBackdrop id={'backdrop'} onClick={(event: any) => handleBackdrop(event)}>
      <CoreStyle.ModalContent modalWidth={modalWidth} modalHeight={modalHeight}>
        {children}
      </CoreStyle.ModalContent>
    </CoreStyle.ModalBackdrop>
  )
}