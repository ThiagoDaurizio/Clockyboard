import * as Styled from './style'
import React, { useState, useEffect } from 'react'
import { TypedTasks } from "../../../../Types/taskType"
import { IoOpenOutline, IoAlarmOutline, IoTrashBinOutline } from "react-icons/io5";
import { findActualTime, turnMinutesInHour } from '../../../../Utilities/timeSetup';
import { useLabelsContext } from '../../../../Context/LabelsContext';
import { useStatusContext } from '../../../../Context/StatusContext';
import { TypedStatus } from '../../../../Types/statusType';
import { useTasksContext } from '../../../../Context/TasksContext';
import { CompOptionBall } from '../../../../Components/OptionBall';

type Props = {
  task: TypedTasks
  handleEditTask: (step: string, task: TypedTasks) => void
  handleStatusTask: (step: string, task: TypedTasks) => void
  handleTimerTask: (step: string, task: TypedTasks) => void
  handleDeleteTask: (step: string, task: TypedTasks) => void
}

export const CompTasksCard = ({
    task, 
    handleEditTask,
    handleStatusTask,
    handleTimerTask,
    handleDeleteTask
  }:Props ) => {
  const { dataLabels } = useLabelsContext()
  const { dataStatus } = useStatusContext()
  const { dataTasks } = useTasksContext()
  const [labelStatus, set_labelStatus] = useState({} as TypedStatus | undefined)
  const [taskTimesAdd, set_taskTimesAdd] = useState<number[]>(task.timesheetAdd)
  const [taskTimesDiscount, set_taskTimesDiscount] = useState<number[]>(task.timesheetDiscount)
  const [isOpen, set_isOpen] = useState<boolean>(false)

  useEffect(() => {
    set_labelStatus(dataStatus.find((status) => status.id === task.taskStatus))
    set_taskTimesAdd(task.timesheetAdd)
    set_taskTimesDiscount(task.timesheetDiscount)
  }, [dataTasks])

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
          <div
            className='contentTop--statusContent'
            style={{
              backgroundColor: labelStatus?.color ? labelStatus.color : 'gray', 
              color: labelStatus?.text ? 'black' : 'white'
            }}
            onClick={() => handleBoxInteract('status')}
          >
            <p>{labelStatus?.label}</p>
          </div>
        </div>

        <div className='contentTop--interactFields'>
          <div className='contentTop--interactFields-btn' onClick={handleOpenDisplay}>+</div>
          <div className='contentTop--interactFields-order'>
            <span onClick={() => handleBoxInteract('edit')}>
              <CompOptionBall
                labelIcon={<IoOpenOutline/>}
                labelText={'Edit'}
                hasTooltip={true}
              />
            </span>
            <span onClick={() => handleBoxInteract('timer')}>
              <CompOptionBall
                labelIcon={<IoAlarmOutline/>}
                labelText={'Timer'}
                hasTooltip={true}
              />
            </span>
            <span onClick={() => handleBoxInteract('delete')}>
              <CompOptionBall
                labelIcon={<IoTrashBinOutline/>}
                labelText={'Delete'}
                hasTooltip={true}
              />
            </span>
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
