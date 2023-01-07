import { createContext, useContext, useState, useEffect } from "react";
import { TypedLocalStorageData } from "../Types/localStorage";
import { TypedTasks } from "../Types/taskType";
import { useGlobalData } from "./GlobalDataContext";


interface IProps {
  children?: React.ReactNode
}

interface InterfaceTasksContextProvider {
  dataTasks: TypedTasks[]
  createTask: (body: TypedTasks) => void
  editTask: (body: TypedTasks) => void
  statusTask: (body: TypedTasks) => void
  timerTask: (body: TypedTasks) => void
  deleteTask: (id: string) => void
}

const TasksContext = createContext({} as InterfaceTasksContextProvider)

export const TasksContextProvider: React.FC<IProps> = ({children}) => {
  const {dataTasks, updateDataTasks} = useGlobalData()



  const createTask = (body: TypedTasks) => {
    const newDataTasks = [body, ...dataTasks]

    updateDataTasks(newDataTasks)
  }
  
  const editTask = (body: TypedTasks) => {
    const filteredDataTasks = dataTasks.filter((task) => task.taskId !== body.taskId)
    const newDataTasks = [body, ...filteredDataTasks]

    updateDataTasks(newDataTasks)
  }

  const statusTask = (body: TypedTasks) => {
    const filteredDataTasks = dataTasks.filter((task) => task.taskId !== body.taskId)
    const newDataTasks = [body, ...filteredDataTasks]

    updateDataTasks(newDataTasks)
  }

  const timerTask = (body: TypedTasks) => {
    const filteredDataTasks = dataTasks.filter((task) => task.taskId !== body.taskId)
    const newDataTasks = [body, ...filteredDataTasks]

    updateDataTasks(newDataTasks)
  }

  const deleteTask = (id: string) => {
    let newDataTasks = dataTasks.filter((item) => item.taskId !== id)
    
    updateDataTasks(newDataTasks)
  }

  return(
    <TasksContext.Provider value={{
        dataTasks,
        createTask,
        editTask,
        statusTask,
        timerTask,
        deleteTask
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasksContext = () => useContext(TasksContext)