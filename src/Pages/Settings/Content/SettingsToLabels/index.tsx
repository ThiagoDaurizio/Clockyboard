import * as Style from './style'
import * as Base from '../../../../Styles/ModalStyle'
import { useState } from 'react'
import { useLabelsContext } from '../../../../Context/LabelsContext'
import { ModalPrompt } from '../../../../Components/Modal/ModalPrompt'
import { CompEditCamp } from '../../../../Components/EditCamp'

export const SettingsToLabels = () => {
  const {dataLabels, editLabel1, editLabel2} = useLabelsContext()
  const [inputLabel1, set_inputLabel1] = useState<string>('')
  const [inputLabel2, set_inputLabel2] = useState<string>('')

  const [editToggleLabel1, set_editToggleLabel1] = useState<boolean>(false)
  const [editToggleLabel2, set_editToggleLabel2] = useState<boolean>(false)

  const [modalOnEditLabel1, set_modalOnEditLabel1] = useState<boolean>(false)
  const [modalOnEditLabel2, set_modalOnEditLabel2] = useState<boolean>(false)

  const modalReset = () => {
    set_inputLabel1('')
    set_inputLabel2('')
    set_editToggleLabel1(false)
    set_editToggleLabel2(false)
  }

  const modalLabelControl = (modal: string, turn: boolean) => {
    if(modal === 'label1'){ 
      set_modalOnEditLabel1(turn)
      modalReset()
    }
    if(modal === 'label2'){ 
      set_modalOnEditLabel2(turn)
    }
  }


  const handleEditLabel1 = (step: string) => {
    if(step === 'modal'){
      modalLabelControl('label1', true)

      set_inputLabel1(dataLabels[0])
    }
    if(step === 'send'){
      const body = [inputLabel1, dataLabels[1]]

      editLabel1(body)
      modalLabelControl('label1', false)
      modalReset()
    }
  }

  const handleEditLabel2 = (step: string) => {
    if(step === 'modal'){
      modalLabelControl('label2', true)

      set_inputLabel2(dataLabels[1])
    }
    if(step === 'send'){
      const body = [dataLabels[0], inputLabel2]

      editLabel2(body)
      modalLabelControl('label2', false)
      modalReset()
    }
  }

  return(
    <Style.Container>
      <div className='content--settings'>
        <h4>Set the Labels</h4>

        <button onClick={() => handleEditLabel1('modal')}>Label #1: <strong>{dataLabels[0]}</strong></button>
        <button onClick={() => handleEditLabel2('modal')}>Label #2: <strong>{dataLabels[1]}</strong></button>
      </div>

      {modalOnEditLabel1 &&(
          <ModalPrompt
            modalOpened={modalOnEditLabel1}
            set_modalOpened={set_modalOnEditLabel1}
            modalWidth={320}
            modalHeight={'fit-content'}
            resetModal={modalReset}
          >
          <Style.SettingsModalEditLabels>
            <h2>Change Label #1</h2>

            <section className='content--input'>
              <CompEditCamp
                editToggle={editToggleLabel1}
                set_editToggle={set_editToggleLabel1}
                campText={inputLabel1}
                set_campText={set_inputLabel1}
              />
            </section>

            <section className='content--btn'>
              <Base.ModalSuccess onClick={() => handleEditLabel1('send')}>Accept</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalLabelControl('label1', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.SettingsModalEditLabels>
        </ModalPrompt>
        )}

      {modalOnEditLabel2 &&(
          <ModalPrompt
            modalOpened={modalOnEditLabel2}
            set_modalOpened={set_modalOnEditLabel2}
            modalWidth={320}
            modalHeight={'fit-content'}
            resetModal={modalReset}
          >
            <Style.SettingsModalEditLabels>
              <h2>Change Label #2</h2>

              <section className='content--input'>
                <CompEditCamp
                  editToggle={editToggleLabel2}
                  set_editToggle={set_editToggleLabel2}
                  campText={inputLabel2}
                  set_campText={set_inputLabel2}
                />
              </section>

              <section className='content--btn'>
                <Base.ModalSuccess onClick={() => handleEditLabel2('send')}>Accept</Base.ModalSuccess>
                <Base.ModalDecline onClick={() => modalLabelControl('label2', false)}>Decline</Base.ModalDecline>
              </section>
            </Style.SettingsModalEditLabels>
          </ModalPrompt>
        )}
    </Style.Container>
  )
}