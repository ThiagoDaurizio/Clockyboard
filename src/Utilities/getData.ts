import { TypedLocalStorageData } from "../Types/localStorage"
import { TypedNotes } from "../Types/notesType"
import { TypedTasks } from "../Types/taskType"

export const getLocalStorageData = () => {
  const data = localStorage.getItem('daurizioClockyboard') || undefined
  let jsonData = null
  if(data) {
    jsonData = JSON.parse(data) as TypedLocalStorageData
  }
  return jsonData
}