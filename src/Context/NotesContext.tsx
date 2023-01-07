import { useGlobalData } from "./GlobalDataContext";
import { createContext, useContext } from "react";
import { TypedNotes } from "../Types/notesType";

interface IProps {
  children?: React.ReactNode
}

interface InterfaceNotesContextProvicer {
  dataNotes: TypedNotes[]
  createNote: (body: TypedNotes) => void
  editNote: (body: TypedNotes) => void
  markNote: (body: TypedNotes) => void
  deleteNote: (id: string) => void
}

const NotesContext = createContext({} as InterfaceNotesContextProvicer)


export const NotesContextProvider: React.FC<IProps> = ({children}) => {
  const {dataNotes, updateDataNotes} = useGlobalData()


  const createNote = (body: TypedNotes) => {
    const newDataNotes = [body, ...dataNotes]

    updateDataNotes(newDataNotes)
  }

  const editNote = (body: TypedNotes) => {
    const filteredDataNotes = dataNotes.filter((note) => note.id !== body.id)
    const newDataNotes = [body, ...filteredDataNotes]

    updateDataNotes(newDataNotes)
  }

  const markNote = (body: TypedNotes) => {
    const filteredDataNotes = dataNotes.filter((note) => note.id !== body.id)
    const newDataNotes = [body, ...filteredDataNotes]

    updateDataNotes(newDataNotes)
  }

  const deleteNote = (id: string) => {
    const newDataNotes = dataNotes.filter((note) => note.id !== id)

    updateDataNotes(newDataNotes)
  }

  return(
    <NotesContext.Provider value={{
        dataNotes,
        createNote,
        editNote,
        markNote,
        deleteNote
      }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotesContext = () => useContext(NotesContext)