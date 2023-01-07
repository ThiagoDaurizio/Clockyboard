import { createContext, useContext, useState, useEffect } from "react";
import { TypedTasks } from "../Types/taskType";
import { useGlobalData } from "./GlobalDataContext";


type Props = {
  children?: React.ReactNode
}

interface InterfaceLabelContextProvider {
  dataLabels: string[]
  editLabel1: (body: string[]) => void
  editLabel2: (body: string[]) => void
}

const LabelContext = createContext({} as InterfaceLabelContextProvider)

export const LabelContextProvider: React.FC<Props> = ({children}) => {
  const {dataLabels, updateDataLabels} = useGlobalData()

  const editLabel1 = (body: string[]) => {
    updateDataLabels(body)
  }

  const editLabel2 = (body: string[]) => {
    updateDataLabels(body)
  }

  return(
    <LabelContext.Provider value={{
      dataLabels,
      editLabel1,
      editLabel2
    }}>
      {children}
    </LabelContext.Provider>
  )
}

export const useLabelsContext = () => useContext(LabelContext)