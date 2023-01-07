import { TypedNotes } from "./notesType"
import { TypedTasks } from "./taskType"


export type TypedLocalStorageData = {
  dataLabels: string[]
  dataNotes: TypedNotes[]
  dataTasks: TypedTasks[]
}