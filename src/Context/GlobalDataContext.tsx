import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorageData } from "../Utilities/getData";
import { TypedLocalStorageData } from "../Types/localStorage";
import { TypedNotes } from "../Types/notesType";
import { TypedTasks } from "../Types/taskType";
import { TypedStatus } from "../Types/statusType";
import { idMaker } from "../Utilities/idMaker";


type IProps = {
  children?: React.ReactNode
}

interface GlobalDataContextProviderInterface extends TypedLocalStorageData {
  updateDataLabels: (newArray: string[]) => void
  updataDataStatus: (newArray: TypedStatus[]) => void
  updateDataTasks: (newArray: TypedTasks[]) => void
  updateDataNotes: (newArray: TypedNotes[]) => void
}

const GlobalDataContext = createContext({} as GlobalDataContextProviderInterface)
export const GlobalDataContextProvider: React.FC<IProps> = ({children}) => {
  const [localStorageData, set_localStorageData] = useState<TypedLocalStorageData>({
    dataLabels: ['Branch', 'Workspace'],
    dataTasks: [],
    dataNotes: [],
    dataStatus: [
      {id: idMaker(), label: 'None', color: '#D9D9D9', text: true},
      {id: idMaker(), label: 'Working', color: '#E3CD00', text: true},
      {id: idMaker(), label: 'Done', color: '#88DF86', text: true},
    ]
  })
  const [useEffectVerify, set_useEffectVerify] = useState<boolean>(false)

  useEffect(() => {
    const checkedLocalStorageData = getLocalStorageData()

    if(checkedLocalStorageData){
      set_localStorageData(checkedLocalStorageData)
    }
  }, [])


  useEffect(() => {
    if(useEffectVerify){
      localStorage.setItem('daurizioClockyboard', JSON.stringify(localStorageData))
      set_useEffectVerify(false)
    }
  }, [localStorageData])

  const updateDataLabels = (newArray: string[]) => {
    set_localStorageData({...localStorageData, dataLabels: newArray})
    set_useEffectVerify(true)
  }
  
  const updataDataStatus = (newArray: TypedStatus[]) => {
    set_localStorageData({...localStorageData, dataStatus: newArray})
    set_useEffectVerify(true)
  }

  const updateDataTasks = (newArray: TypedTasks[]) => {
    set_localStorageData({...localStorageData, dataTasks: newArray})
    set_useEffectVerify(true)
  }
  
  const updateDataNotes = (newArray: TypedNotes[]) => {
    set_localStorageData({...localStorageData, dataNotes: newArray})
    set_useEffectVerify(true)
  }
  
  

  return(
    <GlobalDataContext.Provider value={{
      ...localStorageData, 
      updateDataLabels,
      updataDataStatus,
      updateDataTasks,
      updateDataNotes
      }}>
      {children}
    </GlobalDataContext.Provider>
  )
}

export const useGlobalData = () => useContext(GlobalDataContext)