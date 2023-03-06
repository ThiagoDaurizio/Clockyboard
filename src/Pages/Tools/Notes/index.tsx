import * as Style from './style'
import * as Base from '../../../Styles/ModalStyle'
import { useEffect, useState } from 'react'
import { CompFormball } from '../../../Components/Formball'
import { TypedNotes } from '../../../Types/notesType'
import { CompNotesCard } from './Card'
import { CompToggle } from '../../../Components/Toggleball'
import { ModalPrompt } from '../../../Components/Modal/ModalPrompt'
import { ModalConfirm } from '../../../Components/Modal/ModalConfirm'
import { IoOpenOutline, IoCheckmarkDoneOutline } from "react-icons/io5"
import { useNotesContext } from '../../../Context/NotesContext'
import { idMaker } from '../../../Utilities/idMaker'
import { CompEditCamp } from '../../../Components/EditCamp'
import { CompInputCamp } from '../../../Components/InputCamp'


export const PageNotes = () => {
  const {dataNotes, createNote, editNote, markNote, deleteNote} = useNotesContext()

  const [inputTitle, set_inputTitle] = useState<string>('')
  const [inputText1, set_inputText1] = useState<string>('')
  const [inputText2, set_inputText2] = useState<string>('')
  const [inputToggleTitle, set_inputToggleTitle] = useState<boolean>(false)
  const [inputToggleText1, set_inputToggleText1] = useState<boolean>(false)
  const [inputToggleText2, set_inputToggleText2] = useState<boolean>(false)

  const [editToggleTitle, set_editToggleTitle] = useState<boolean>(false)
  const [editToggleText1, set_editToggleText1] = useState<boolean>(false)
  const [editToggleText2, set_editToggleText2] = useState<boolean>(false)

  const [noteInfo, set_noteInfo] = useState<TypedNotes>({} as TypedNotes)

  const [modalOnCreateNote, set_modalOnCreateNote] = useState<boolean>(false)
  const [modalOnEditNote, set_modalOnEditNote] = useState<boolean>(false)
  const [modalOnDeleteNote, set_modalOnDeleteNote] = useState<boolean>(false)

  useEffect(() => {
    if(!inputToggleText1){
      set_editToggleText1(false)
      set_inputText1('')
    }
  }, [inputToggleText1])

  useEffect(() => {
    if(!inputToggleText2){
      set_editToggleText2(false)
      set_inputText2('')
    }
  }, [inputToggleText2])


  const modalReset = () => {
    set_inputTitle('')
    set_inputText1('')
    set_inputText2('')
    set_inputToggleTitle(false)
    set_inputToggleText1(false)
    set_inputToggleText2(false)
  }

  const modalDecision = (decision: boolean) => {
    if(decision){
      handleDeleteNote('send')
    } else{
      modalNoteControl('delete', false)
    }
  }


  const modalNoteControl = (modal: string, turn: boolean) => {
    if(modal === 'create'){ 
      set_modalOnCreateNote(turn)
      modalReset()
    }
    if(modal === 'edit'){ 
      set_modalOnEditNote(turn)
      modalReset()
    }
    if(modal === 'delete'){ 
      set_modalOnDeleteNote(turn)
    }
  }


  const handleCreateNote = (step: string) => {
    if(step === 'modal'){
      modalNoteControl('create', true)
    }
    if(step === 'send'){
      const body = {
        id: idMaker(),
        important: false,
        text: [inputTitle, inputToggleTitle ? 'title' : 'text'],
        subText1: inputText1,
        subText2: inputText2
      }

      createNote(body)
      modalNoteControl('create', false)
      modalReset()
      set_editToggleTitle(false)
      set_editToggleText1(false)
      set_editToggleText2(false)
    }
  }

  const handleEditNote = (step: string, note?: TypedNotes) => {
    if(step === 'modal'){
      modalNoteControl('edit', true)
      note && set_noteInfo(note)

      note && set_inputTitle(note?.text[0])
      note && set_inputText1(note?.subText1)
      note && set_inputText2(note?.subText2)

      if(note && note.text[1] === 'title'){
        set_inputToggleTitle(true)
      }

      if(note && note.text[1] === 'text'){
        set_inputToggleTitle(false)
      }

      if(note && note.subText1){
        set_inputToggleText1(true)
      } else{
        set_inputToggleText1(false)
      }

      if(note && note.subText2){
        set_inputToggleText2(true)
      } else{
        set_inputToggleText2(false)
      }
    }
    if(step === 'send'){
      const body = {
        id: noteInfo?.id,
        important: noteInfo.important,
        text: [inputTitle, inputToggleTitle ? 'title' : 'text'],
        subText1: inputText1,
        subText2: inputText2,
      }

      editNote(body)
      
      modalNoteControl('edit', false)
      modalReset()
      set_editToggleTitle(false)
      set_editToggleText1(false)
      set_editToggleText2(false)
    }
  }

  const handleMarkNote = (step: string, note: TypedNotes) => {
    if(step === 'send'){
      const body = {
        id: note.id,
        important: note.important ? false : true,
        text: note.text,
        subText1: note.subText1,
        subText2: note.subText2,
      }

      markNote(body)
    }
  }

  const handleDeleteNote = (step: string, note?: TypedNotes) => {
    if(step === 'modal'){
      modalNoteControl('delete', true)
      note && set_noteInfo(note)
    }
    if(step === 'send'){
      deleteNote(noteInfo.id)
      modalNoteControl('delete', false)
    }
  }

  const handleFormball = (trigger: string) => {
    const body = {
      id: idMaker(),
      important: false,
      text: [inputTitle, 'text'],
      subText1: inputText1,
      subText2: inputText1
    }
    
    createNote(body)
    modalNoteControl('create', false)
  }

  const toRenderNotesCard = dataNotes?.map((note: TypedNotes) => {
    return (
      <CompNotesCard 
        key={note.id} 
        note={note} 
        handleEditNote={handleEditNote}
        handleMarkNote={handleMarkNote}
        handleDeleteNote={handleDeleteNote}
      />
    )
  })

  return(
    <Style.Container>
      <CompFormball 
        textFormball={inputTitle}
        set_textFormball={set_inputTitle} 
        handleFormball={handleFormball}
        handleCreate={handleCreateNote}
        openMore={true}
      />

      <div className='notes--container'>
        {toRenderNotesCard}
      </div>

      
      {modalOnCreateNote &&(
        <ModalPrompt
          modalOpened={modalOnCreateNote}
          set_modalOpened={set_modalOnCreateNote}
          modalWidth={'fit-content'}
          modalHeight={'fit-content'}
        >
          <Style.ModalCreateNote>
            <h2>Create an Note</h2>

            <section>
              <CompInputCamp 
                inputText={inputTitle}
                set_inputText={set_inputTitle}
                labelText={'write something...'}
              />

              <div>
                <p className={inputToggleTitle ? '_active' : ''}>Is a title</p>
                <CompToggle 
                  toggle={inputToggleTitle} 
                  set_toggle={set_inputToggleTitle}
                />
              </div>
            </section>

            <section>
              <div className='modal--createNote-toggle'>
                <p className={inputToggleText1 ? '_active' : ''}>Text #1</p>
                <CompToggle 
                  toggle={inputToggleText1} 
                  set_toggle={set_inputToggleText1}
                />
              </div>

              <CompInputCamp 
                inputText={inputText1}
                set_inputText={set_inputText1}
                labelText={'write something...'}
                style={{opacity: inputToggleText1 ? 1 : 0, pointerEvents: inputToggleText1 ? 'all' : 'none'}}
              />
            </section>

            <section>
              <div className='modal--createNote-toggle'>
                <p className={inputToggleText2 ? '_active' : ''}>Text #2</p>
                <CompToggle 
                  toggle={inputToggleText2} 
                  set_toggle={set_inputToggleText2}
                />
              </div>

              <CompInputCamp 
                inputText={inputText2}
                set_inputText={set_inputText2}
                labelText={'write something...'}
                style={{opacity: inputToggleText2 ? 1 : 0, pointerEvents: inputToggleText2 ? 'all' : 'none'}}
              />
            </section>

            <section>
              <Base.ModalSuccess onClick={() => handleCreateNote('send')}>Create</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalNoteControl('create', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.ModalCreateNote>
        </ModalPrompt>
      )}

      {modalOnEditNote &&(
        <ModalPrompt
          modalOpened={modalOnEditNote}
          set_modalOpened={set_modalOnEditNote}
          modalWidth={'fit-content'}
          modalHeight={'fit-content'}
        >
          <Style.ModalEditNote>
            <h2>Edit your note Infos</h2>

            <section>
              <CompToggle 
                toggle={inputToggleTitle}
                set_toggle={set_inputToggleTitle}
              />
              <CompEditCamp 
                campText={inputTitle}
                set_campText={set_inputTitle}
                editToggle={editToggleTitle}
                set_editToggle={set_editToggleTitle}
              />
            </section>

            <section>
              <CompToggle 
                  toggle={inputToggleText1}
                  set_toggle={set_inputToggleText1}
                />
                {inputToggleText1 ?
                  <CompEditCamp 
                    campText={inputText1}
                    set_campText={set_inputText1}
                    editToggle={editToggleText1}
                    set_editToggle={set_editToggleText1}
                  />
                :
                null}
            </section>

            <section>
              <CompToggle 
                toggle={inputToggleText2}
                set_toggle={set_inputToggleText2}
              />

              {inputToggleText2 ?
                <CompEditCamp 
                  campText={inputText2}
                  set_campText={set_inputText2}
                  editToggle={editToggleText2}
                  set_editToggle={set_editToggleText2}
                />
              :
              null}
            </section>

            <section>
                <Base.ModalSuccess onClick={() => handleEditNote('send')}>Accept</Base.ModalSuccess>
                <Base.ModalDecline onClick={() => modalNoteControl('edit', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.ModalEditNote>
        </ModalPrompt>
      )}

      {modalOnDeleteNote &&(
        <ModalConfirm
          modalOpened={modalOnDeleteNote}
          set_modalOpened={set_modalOnDeleteNote}
          modalHeading={"You're has certain of this?"}
          modalDecision={modalDecision}
        />
      )}
    </Style.Container>
  )
}