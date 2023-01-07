import { TypedNotes } from '../../../../Types/notesType'
import * as Style from './style'
import { IoOpenOutline, IoHeartOutline, IoTrashBinOutline, IoHeartSharp } from "react-icons/io5";
import { useState } from 'react';

type Props = {
  note: TypedNotes
  handleEditNote: (step: string, note: TypedNotes) => void
  handleMarkNote: (step: string, note: TypedNotes) => void
  handleDeleteNote: (step: string, id: TypedNotes) => void
}

export const CompNotesCard = ({
    note, 
    handleEditNote,
    handleMarkNote,
    handleDeleteNote
  }:Props ) => {
  const [boxOpened, set_boxOpened] = useState<boolean>(false)
  const [isImportant, set_isImportant] = useState<boolean>(note.important)

  const handleBox = (event: any) => {
    if(!boxOpened || event.target.id === 'noteBox'){
      set_boxOpened(!boxOpened)
    }
  }

  const handleBoxInteract = (order: string) => {
    set_boxOpened(false)

    if(boxOpened){
      if(order === 'edit'){
        handleEditNote('modal', note)
      }

      if(order === 'mark'){
        handleMarkNote('send', note)
        set_isImportant(!isImportant)
      }

      if(order === 'delete'){
        handleDeleteNote('modal', note)
      }
    }
  }


  const handleCopyText = (field: string) => {
    if(field === 'title'){
      navigator.clipboard.writeText(note.text[0])
    }

    if(field === 'subtext1'){
      navigator.clipboard.writeText(note.subText1)
    }

    if(field === 'subtext2'){
      navigator.clipboard.writeText(note.subText2)
    }
  }

  return(
    <Style.Container>
      <Style.Content isImportant={isImportant}>
        {note.important && <IoHeartSharp className='content--heart'/>}
        <p className={note.text[1]} onClick={() => handleCopyText('title')}>{note.text[0]}</p>
        {note.subText1 && <Style.Separator></Style.Separator>}
        {note.subText1 && <p onClick={() => handleCopyText('subtext1')}>{note.subText1}</p>}
        {note.subText2 && <p onClick={() => handleCopyText('subtext2')}>{note.subText2}</p>}
      </Style.Content>
      <Style.Interact id={'noteBox'} boxOpened={boxOpened} onClick={handleBox}>
        <span onClick={() => handleBoxInteract('edit')}><IoOpenOutline/></span>
        <span onClick={() => handleBoxInteract('mark')}><IoHeartOutline/></span>
        <span onClick={() => handleBoxInteract('delete')}><IoTrashBinOutline/></span>
      </Style.Interact>
    </Style.Container>
  )
}