import { createContext, useContext } from "react";
import { TypedStatus } from "../Types/statusType";
import { useGlobalData } from "./GlobalDataContext";

type Props = {
  children?: React.ReactNode
}

interface InterfaceStatusContextProvider {
  dataStatus: TypedStatus[]
  createStatus: (body: TypedStatus) => void
  editStatus: (body: TypedStatus) => void
  deleteStatus: (id: string) => void
}

const StatusContext = createContext({} as InterfaceStatusContextProvider)

export const StatusContextProvider: React.FC<Props> = ({children}) => {
  const {dataStatus, updataDataStatus} = useGlobalData()


  const createStatus = (body: TypedStatus) => {
    const newDataStatus = [...dataStatus, body]

    updataDataStatus(newDataStatus)
  }

  const editStatus = (body: TypedStatus) => {
    const filteredDataStatus = dataStatus.filter((status) => status.id !== body.id)
    const newDataStatus = [...filteredDataStatus, body]

    updataDataStatus(newDataStatus)
  }

  const deleteStatus = (id: string) => {
    const newDataStatus = dataStatus.filter((status) => status.id !== id)

    updataDataStatus(newDataStatus)
  }

  return(
    <StatusContext.Provider value={{
      dataStatus,
      createStatus,
      editStatus,
      deleteStatus
    }}>
      {children}
    </StatusContext.Provider>
  )
}

export const useStatusContext = () => useContext(StatusContext)