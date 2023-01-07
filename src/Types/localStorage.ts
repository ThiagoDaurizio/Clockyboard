import { TypedNotes } from "./notesType"
import { TypedStatus } from "./statusType"
import { TypedTasks } from "./taskType"


export type TypedLocalStorageData = {
  dataLabels: string[]
  dataNotes: TypedNotes[]
  dataTasks: TypedTasks[]
  dataStatus: TypedStatus[]
}