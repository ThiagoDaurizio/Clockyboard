import { ModalAlert } from '../../Components/Modal/ModalAlert'
import * as Style from './style'
import { useState } from 'react'
import { ModalConfirm } from '../../Components/Modal/ModalConfirm'
import { ModalPrompt } from '../../Components/Modal/ModalPrompt'
import * as StyleBase from '../../Styles/ModalStyle'

export const PageHome = () => {
  const [modalAlert1, set_modalAlert1] = useState<boolean>(false)
  const [modalAlert2, set_modalAlert2] = useState<boolean>(false)


  const modalDecision1 = (decision: boolean) => {
    if(decision){
      console.log('foi aceito 1')
    }else{
      console.log('não foi aceito 1')
    }
  }

  const modalDecision2 = (decision: boolean) => {
    if(decision){
      console.log('foi aceito 2')
    }else{
      console.log('não foi aceito 2')
    }
  }

  const modalReset1 = () => {
    console.log('modal 1 resetado')
  }

  const modalReset2 = () => {
    console.log('modal 2 resetado')
  }

  return(
    <Style.Container>
      HOME
      <button onClick={() => set_modalAlert1(true)}>modal 1</button>
      <button onClick={() => set_modalAlert2(true)}>modal 2</button>

      
      {modalAlert1 && (
        <ModalPrompt
          modalOpened={modalAlert1}
          set_modalOpened={set_modalAlert1}
          modalWidth={300}
          modalHeight={400}
          resetModal={modalReset1}
        >
          <div>
            <p>Teste 1</p>

            <StyleBase.ModalSuccess onClick={() => set_modalAlert1(false)}>Complete</StyleBase.ModalSuccess>
            <StyleBase.ModalDecline onClick={() => set_modalAlert1(false)}>Cancel</StyleBase.ModalDecline>
          </div>
        </ModalPrompt>
      )}

      {modalAlert2 && (
        <ModalPrompt
        modalOpened={modalAlert2}
        set_modalOpened={set_modalAlert2}
        modalWidth={300}
        modalHeight={400}
        resetModal={modalReset2}
      >
        <div>
          <p>Teste 2</p>
          <StyleBase.ModalSuccess onClick={() => set_modalAlert2(false)}>Complete</StyleBase.ModalSuccess>
          <StyleBase.ModalDecline onClick={() => set_modalAlert2(false)}>Cancel</StyleBase.ModalDecline>
        </div>
      </ModalPrompt>
      )}
    </Style.Container>
  )
}