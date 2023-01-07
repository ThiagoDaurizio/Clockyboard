import * as Style from './style'
import * as Base from '../../../../Styles/ModalStyle'
import { useState } from 'react'
import { useStatusContext } from '../../../../Context/StatusContext'
import { TypedStatus } from '../../../../Types/statusType'
import { idMaker } from '../../../../Utilities/idMaker'
import { ModalPrompt } from '../../../../Components/Modal/ModalPrompt'
import { CompEditCamp } from '../../../../Components/EditCamp'
import { CompToggle } from '../../../../Components/Toggleball'
import { IoOpenOutline, IoTrashBinOutline } from "react-icons/io5";
import { ModalConfirm } from '../../../../Components/Modal/ModalConfirm'
import { ModalAlert } from '../../../../Components/Modal/ModalAlert'


export const SettingsToStatus = () => {
  const { dataStatus, createStatus, editStatus, deleteStatus } = useStatusContext()
  const [statusInfo, set_statusInfo] = useState({} as TypedStatus)

  const [inputStatusName, set_inputStatusName] = useState<string>('')
  const [inputStatusColor, set_inputStatusColor] = useState<string>('')
  const [inputStatusText, set_inputStatusText] = useState<boolean>(false)

  const [editToggleName, set_editToggleName] = useState<boolean>(false)
  const [editToggleColor, set_editToggleColor] = useState<boolean>(false)

  const [modalOnCreateStatus, set_modalOnCreateStatus] = useState<boolean>(false)
  const [modalOnEditStatus, set_modalOnEditStatus] = useState<boolean>(false)
  const [modalOnDeleteStatus, set_modalOnDeleteStatus] = useState<boolean>(false)

  const [modalAlert, set_modalAlert] = useState<boolean>(false)
  const [modalAlertHeading, set_modalAlertHeading] = useState<string>('')

  const modalReset = () => {
    set_inputStatusName('')
    set_inputStatusColor('')
    set_inputStatusText(false)

    set_editToggleName(false)
    set_editToggleColor(false)
  }

  const modalDecisionToStatus = (decision:boolean) => {
    if(decision){
      handleDeleteStatus('send', statusInfo)
    } else{
      modalStatusControl('delete', false)
    }
  }

  const modalStatusControl = (modal: string, turn: boolean) => {
    if(modal === 'create'){
      set_modalOnCreateStatus(turn)
      modalReset()
    }
    if(modal === 'edit'){
      set_modalOnEditStatus(turn)
      modalReset()
    }
    if(modal === 'delete'){
      set_modalOnDeleteStatus(turn)
    }
  }

  const handleCreateStatus = (step: string) => {
    if(step === 'modal'){
      modalStatusControl('create', true)
    }
    if(step === 'send'){
      const body = {
        id: idMaker(),
        label: inputStatusName,
        color: inputStatusColor,
        text: !inputStatusText
      }

      if(!body.label || !body.color){
        set_modalAlert(true)

        if(!body.label && !body.color){
          set_modalAlertHeading('Label and Color is required!')
        }

        if(!body.label && body.color){
          set_modalAlertHeading('Label is required!')
        }

        if(body.label && !body.color){
          set_modalAlertHeading('Color is required!')
        }
      }

      if(body.label && body.color){
        createStatus(body)
        modalStatusControl('create', false)
      }
    }
  }

  const handleEditStatus = (step: string, status: TypedStatus) => {
    if(step === 'modal'){
      modalStatusControl('edit', true)
      set_statusInfo(status)
      set_inputStatusName(status.label)
      set_inputStatusColor(status.color)
      set_inputStatusText(!status.text)
    }
    if(step === 'send'){
      const body = {
        id: status.id,
        label: inputStatusName,
        color: inputStatusColor,
        text: !inputStatusText
      }

      
      if(!body.label || !body.color){
        set_modalAlert(true)

        if(!body.label && !body.color){
          set_modalAlertHeading('Label and Color is required!')
        }

        if(!body.label && body.color){
          set_modalAlertHeading('Label is required!')
        }

        if(body.label && !body.color){
          set_modalAlertHeading('Color is required!')
        }
      }

      if(body.label && body.color){
        editStatus(body)
        modalStatusControl('edit', false)
      }
    }
  }

  const handleDeleteStatus = (step: string, status: TypedStatus) => {
    if(step === 'modal'){
      modalStatusControl('delete', true)
      set_statusInfo(status)
    }
    if(step === 'send'){
      deleteStatus(status.id)
      modalStatusControl('delete', false)
    }
  }


  return(
    <Style.Container>
      <div className='content--heading'>
        <h4>Status Settings</h4>
        <button onClick={() => handleCreateStatus('modal')}>create new</button>
      </div>

      {dataStatus?.map((status) => {
        return(
          <Style.CardStatus>
            <div className='contentCard--interact'>
              <button onClick={() => handleEditStatus('modal', status)}><IoOpenOutline/></button>
              <button onClick={() => handleDeleteStatus('modal', status)}><IoTrashBinOutline/></button>
            </div>

            <div className='contentCard--separator'></div>

            <div className='contentCard--info'>
              <div className='contentCard--info-color' style={{backgroundColor: status.color}}></div>
              <p className='contentCard--info-text'>{status.label}</p>
            </div>
          </Style.CardStatus>
        )
      })}


      {modalOnCreateStatus &&(
        <ModalPrompt
          modalOpened={modalOnCreateStatus}
          set_modalOpened={set_modalOnCreateStatus}
          modalWidth={350}
          modalHeight={'fit-content'}
          resetModal={modalReset}
        >
          <Style.SettingsModalCreateStatus>
            <h2>Create an new Status</h2>

            <section className='content--label'>
              <label>Status Label text:</label>
              <input 
                placeholder={'write an label text'}
                type={'text'}
                value={inputStatusName}
                onChange={(event) => set_inputStatusName(event.target. value)}
              />
            </section>

            <section className='content--color'>
              <label>Status Background color: <span>{inputStatusColor}</span></label>
              <input 
                type={'color'}
                value={inputStatusColor}
                onChange={(event) => set_inputStatusColor(event.target.value)}
              />
            </section>

            <section className='content--text'>
              <label>Status Text color:</label>

              <div className='content--text-toggle'>
                <CompToggle
                  toggle={inputStatusText}
                  set_toggle={set_inputStatusText}
                  />
                <p style={{color: inputStatusText ? 'white' : 'black'}}>text</p>
              </div>
            </section>

            <section className='content--btn'>
              <Base.ModalSuccess onClick={() => handleCreateStatus('send')}>Create</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalStatusControl('create', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.SettingsModalCreateStatus>
        </ModalPrompt>
      )}

      {modalOnEditStatus &&(
        <ModalPrompt
          modalOpened={modalOnEditStatus}
          set_modalOpened={set_modalOnEditStatus}
          modalWidth={300}
          modalHeight={'fit-content'}
          resetModal={modalReset}
        >
          <Style.SettingsModalEditStatus>
            <h2>Edit this Status</h2>

            <section className='content--label'>
              <label>Status Label text: </label>
              <CompEditCamp
                editToggle={editToggleName}
                set_editToggle={set_editToggleName}
                campText={inputStatusName}
                set_campText={set_inputStatusName}
              />
            </section>

            <section className='content--color'>
              <label>Status Background color: <span>{inputStatusColor}</span></label>
              <input 
                type={'color'}
                value={inputStatusColor}
                onChange={(event) => set_inputStatusColor(event.target.value)}
              />
            </section>

            <section className='content--text'>
              <label>Status Text color:</label>

              <div className='content--text-toggle'>
                <CompToggle
                  toggle={inputStatusText}
                  set_toggle={set_inputStatusText}
                  />
                <p style={{color: inputStatusText ? 'white' : 'black'}}>text</p>
              </div>
            </section>

            <section className='content--btn'>
              <Base.ModalSuccess onClick={() => handleEditStatus('send', statusInfo)}>Accept</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalStatusControl('edit', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.SettingsModalEditStatus>
        </ModalPrompt>
      )}

      {modalOnDeleteStatus &&(
        <ModalConfirm 
          modalOpened={modalOnDeleteStatus}
          set_modalOpened={set_modalOnDeleteStatus}
          modalHeading={'You is certain to delete this task?'}
          modalDecision={modalDecisionToStatus}
        />
      )}

      {modalAlert &&(
        <ModalAlert
          modalOpened={modalAlert}
          set_modalOpened={set_modalAlert}
          modalHeading={modalAlertHeading}
        />
      )}
    </Style.Container>
  )
}