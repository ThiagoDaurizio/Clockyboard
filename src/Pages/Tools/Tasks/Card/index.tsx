import * as Styled from './style'
import React, { useEffect, useState, useContext, SyntheticEvent } from 'react'
import { TypedClients, TypedTasks } from "../../../../Types/taskType"
import { IoOpenOutline, IoAlarmOutline, IoTrashBinOutline } from "react-icons/io5";
import { findActualTime, turnMinutesInHour } from '../../../../Utilities/timeSetup';
import { getStatusColor } from '../../../../Utilities/statusColor';
// import { put_timers } from '../../../../Data/Controllers/tasks';
// import { get_data } from '../../../../Data/Controllers/getData';
import { useLabelsContext } from '../../../../Context/LabelsContext';

type Props = {
  task: TypedTasks
  dataTasks: TypedTasks[]
  set_dataTasks: React.Dispatch<React.SetStateAction<TypedTasks[]>>
  handleEditTask: (step: string, task: TypedTasks) => void
  handleStatusTask: (step: string, task: TypedTasks) => void
  handleTimerTask: (step: string, task: TypedTasks) => void
  handleDeleteTask: (step: string, task: TypedTasks) => void
}

export const CompTasksCard = ({
    task, 
    dataTasks, 
    set_dataTasks,
    handleEditTask,
    handleStatusTask,
    handleTimerTask,
    handleDeleteTask
  }:Props ) => {
  const { dataLabels } = useLabelsContext()

  const [taskTimesAdd, set_taskTimesAdd] = useState<number[]>(task.timesheetAdd)
  const [taskTimesDiscount, set_taskTimesDiscount] = useState<number[]>(task.timesheetDiscount)

  const [isOpen, set_isOpen] = useState<boolean>(false)

  const handleOpenDisplay = () => {
    set_isOpen(!isOpen)
  }

  const handleBoxInteract = (order: string) => {
    if(order === 'edit'){
      handleEditTask('modal', task)
    }
    if(order === 'status'){
      handleStatusTask('modal', task)
    }
    if(order === 'timer'){
      handleTimerTask('modal', task)
    }
    if(order === 'delete'){
      handleDeleteTask('modal', task)
    }
  }

  const toRenderTimesAdd = taskTimesAdd?.map((time, index) => {
    return(
      <option key={index} disabled>
        {turnMinutesInHour(time)}
      </option>
    )
  })

  const toRenderTimesDiscount = taskTimesDiscount?.map((time, index) => {
    return(
      <option key={index} disabled>
        {turnMinutesInHour(time)}
      </option>
    )
  })

  const handleCopyText = (field: string) => {
    if(field === 'name'){
      navigator.clipboard.writeText(task.taskName)
    }

    if(field === 'label1'){
      navigator.clipboard.writeText(task.taskLabel1)
    }

    if(field === 'label2'){
      navigator.clipboard.writeText(task.taskLabel2)
    }
  }


  return(
    <Styled.Container isOpen={isOpen}>
      <Styled.ContentTop isOpen={isOpen}>
        <div className='contentTop--statusFields'>
          <Styled.ContentStatus 
            statusContent={getStatusColor(task.taskStatus)[0]} 
            statusText={getStatusColor(task.taskStatus)[1]}
            onClick={() => handleBoxInteract('status')}
          >
            <p>{getStatusColor(task.taskStatus)[2].replace('-', ' ')}</p>
          </Styled.ContentStatus>
        </div>

        <div className='contentTop--interactFields'>
          <div className='contentTop--interactFields-btn' onClick={handleOpenDisplay}>+</div>
          <div className='contentTop--interactFields-order'>
            <div className='contentTop--interactFields-order-btn' onClick={() => handleBoxInteract('edit')}> <IoOpenOutline/> </div>
            <div className='contentTop--interactFields-order-btn' onClick={() => handleBoxInteract('timer')}> <IoAlarmOutline/> </div>
            <div className='contentTop--interactFields-order-btn' onClick={() => handleBoxInteract('delete')}> <IoTrashBinOutline/> </div>
          </div>
        </div>

        <div className='contentTop--textsFields'>
          <div className='contentTop--textsFields-branch'>
            <label>{dataLabels[0]}:</label>
            <p onClick={() => handleCopyText('label1')}>{task.taskLabel1}</p>
          </div>
          <div className='contentTop--textsFields-name'>
            <label>Name:</label>
            <p onClick={() => handleCopyText('name')}>{task.taskName}</p>
          </div>
        </div>
      </Styled.ContentTop>

      <Styled.ContentBottom isOpen={isOpen}>
        {task.taskLabel2 && (
          <div className='contentBottom--textFields'>
            <label>{dataLabels[1]}:</label>
            <p onClick={() => handleCopyText('label2')}> {task.taskLabel2}</p>
          </div>
        )}

        <div className='contentBottom--timesActual'>
          <p>{findActualTime(taskTimesAdd, taskTimesDiscount)}</p>
        </div>


        <div className='contentBottom--times'>
          {taskTimesAdd.length > 0 && (
            <div className='contentBottom--timesAdd'>
              <select>
                <option disabled selected>Added</option>
                {toRenderTimesAdd}
              </select>
            </div>
          )}

          {taskTimesDiscount.length > 0 &&(
            <div className='contentBottom--timesDiscount'>
              <select>
                <option disabled selected>Used</option>
                {toRenderTimesDiscount}
              </select>
            </div>
          )}
        </div>
      </Styled.ContentBottom>
    </Styled.Container>
  )
}
