import { useState } from 'react'
import * as Style from './style'

type Props = {
  contentText: string
  modalConfirmOpened: boolean
  set_modalConfirmOpened: React.Dispatch<React.SetStateAction<boolean>>
  modalWidth?: number
  modalHeight?: number
  backdropClose?: boolean
  modalDecision: (decision: string) => void
}

export const CompModalConfirm = ({
  contentText,
  modalConfirmOpened, 
  set_modalConfirmOpened, 
  modalWidth = 300, 
  modalHeight = 200,
  backdropClose = false,
  modalDecision
}: Props) => {

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      if(backdropClose){
        set_modalConfirmOpened(false)
      }
    }
  }

  return(
    <Style.Backdrop id={'backdrop'} onClick={(event) => handleBackdrop(event)}>
      <Style.Content modalWidth={modalWidth} modalHeight={modalHeight}>
        <Style.Container>
          <div className='modal--text'>
            <p>{contentText}</p>
          </div>

          <div className='modal--interact'>
            <button className='modal--interact-confirm' onClick={() => modalDecision('confirmed')}>Confirm</button>
            <button className='modal--interact-cancel' onClick={() => modalDecision('canceled')}>Cancel</button>
          </div>
        </Style.Container>
      </Style.Content>
    </Style.Backdrop>
  )
}