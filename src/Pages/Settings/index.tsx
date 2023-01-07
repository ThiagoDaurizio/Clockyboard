import { useState } from 'react'
import { CompEditCamp } from '../../Components/EditCamp'
import { ModalPrompt } from '../../Components/Modal/ModalPrompt'
import { useLabelsContext } from '../../Context/LabelsContext'
import * as Style from './style'
import * as Base from '../../Styles/ModalStyle'

export const PageSettings = () => {
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


  const handleTheme = (theme: string) => {
    if(theme === 'blue'){
      document.documentElement.style.setProperty('--primaryColor', '#2196f3')
      document.documentElement.style.setProperty('--primaryLighter', '#6ec6ff')
      document.documentElement.style.setProperty('--primaryDarker', '#0069c0')
      // document.documentElement.style.setProperty('--blackColor', '#fafafa')
      // document.documentElement.style.setProperty('--blackLighter', '#ffffff')
      // document.documentElement.style.setProperty('--blackDarker', '#c7c7c7')
      // document.documentElement.style.setProperty('--whiteColor', '#212121')
      // document.documentElement.style.setProperty('--whiteLighter', '#484848')
      // document.documentElement.style.setProperty('--whiteDarker', '#000000')
    }
    if(theme === 'green'){
      document.documentElement.style.setProperty('--primaryColor', '#81c784')
      document.documentElement.style.setProperty('--primaryLighter', '#b2fab4')
      document.documentElement.style.setProperty('--primaryDarker', '#519657')
    }
  }

  return(
    <Style.Container>
      <div className='theme--container'>
        <div className='theme--top'>
          <p>Choose an Theme:</p>
        </div>

        <div className='theme--bottom'>
          <section className='theme--bottom-section'>
            <span className='theme--opt1' onClick={() => handleTheme('blue')}></span>
            <p>Name</p>
          </section>
          <section className='theme--bottom-section'>
            <span className='theme--opt2' onClick={() => handleTheme('green')}></span>
            <p>Name</p>
          </section>
        </div>
      </div>

      <Style.ContentTheme>
          <h4>Set the Labels</h4>

          <button onClick={() => handleEditLabel1('modal')}>Label #1: <strong>{dataLabels[0]}</strong></button>
          <button onClick={() => handleEditLabel2('modal')}>Label #2: <strong>{dataLabels[1]}</strong></button>
      </Style.ContentTheme>

      {modalOnEditLabel1 ? 
        (
          <ModalPrompt
            modalOpened={modalOnEditLabel1}
            set_modalOpened={set_modalOnEditLabel1}
            modalWidth={320}
            modalHeight={'fit-content'}
            resetModal={modalReset}
          >
          <>
            <h2>Change Label #1</h2>

            <section>
              <CompEditCamp
                editToggle={editToggleLabel1}
                set_editToggle={set_editToggleLabel1}
                campText={inputLabel1}
                set_campText={set_inputLabel1}
              />
            </section>

            <section>
              <Base.ModalSuccess onClick={() => handleEditLabel1('send')}>Accept</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalLabelControl('label1', false)}>Decline</Base.ModalDecline>
            </section>
          </>
        </ModalPrompt>
        )
        : null
      }

      {modalOnEditLabel2 ?
        (
          <ModalPrompt
            modalOpened={modalOnEditLabel2}
            set_modalOpened={set_modalOnEditLabel2}
            modalWidth={320}
            modalHeight={'fit-content'}
            resetModal={modalReset}
          >
            <>
              <h2>Change Label #2</h2>

              <section>
                <CompEditCamp
                  editToggle={editToggleLabel2}
                  set_editToggle={set_editToggleLabel2}
                  campText={inputLabel2}
                  set_campText={set_inputLabel2}
                />
              </section>

              <section>
                <Base.ModalSuccess onClick={() => handleEditLabel2('send')}>Accept</Base.ModalSuccess>
                <Base.ModalDecline onClick={() => modalLabelControl('label2', false)}>Decline</Base.ModalDecline>
              </section>
            </>
          </ModalPrompt>
        )
        : null
      }
    </Style.Container>
  )
}