import { useEffect, useState } from 'react'
import { CompFormball } from '../../../Components/Formball'
import { TypedTasks } from '../../../Types/taskType'
import { CompTasksCard } from './Card'
import * as Style from './style'
import * as Base from '../../../Styles/ModalStyle'
import { IoArrowRedo } from "react-icons/io5";
import { CompEditCamp } from '../../../Components/EditCamp'
import { ModalConfirm } from '../../../Components/Modal/ModalConfirm'
import { idMaker } from '../../../Utilities/idMaker'
import { ModalPrompt } from '../../../Components/Modal/ModalPrompt'
import { CompCountCamp } from '../../../Components/CountCamp'
import { useTasksContext } from '../../../Context/TasksContext'
import { useLabelsContext } from '../../../Context/LabelsContext'
import { useStatusContext } from '../../../Context/StatusContext'


export const PageTimers = () => {
  const { dataTasks, createTask, editTask, statusTask, timerTask, deleteTask } = useTasksContext()
  const { dataLabels } = useLabelsContext()
  const { dataStatus } = useStatusContext()

  const [textFormball, set_textFormball] = useState<string>('')

  const [inputTaskName, set_inputTaskName] = useState<string>('')
  const [inputTaskLabel1, set_inputTaskLabel1] = useState<string>('')
  const [inputTaskLabel2, set_inputTaskLabel2] = useState<string>('')
  const [initialTaskTimer, set_initialTaskTimer] = useState<number>(0)
  const [timerSetup, set_timerSetup] = useState<boolean>(true)

  const [taskInfo, set_taskInfo] = useState<any>()

  const [modalOnCreateTask, set_modalOnCreateTask] = useState<boolean>(false)
  const [modalOnEditTask, set_modalOnEditTask] = useState<boolean>(false)
  const [modalOnStatusTask, set_modalOnStatusTask] = useState<boolean>(false)
  const [modalOnDeleteTask, set_modalOnDeleteTask] = useState<boolean>(false)
  const [modalOnTimerTask, set_modalOnTimerTask] = useState<boolean>(false)

  const [editToggleTaskName, set_editToggleTaskName] = useState<boolean>(false)
  const [editToggleTaskLabel1, set_editToggleTaskLabel1] = useState<boolean>(false)
  const [editToggleTaskLabel2, set_editToggleTaskLabel2] = useState<boolean>(false)

  const [watcher, set_watcher] = useState<number>(0)

  const modalReset = () => {
    set_inputTaskName('')
    set_inputTaskLabel1('')
    set_inputTaskLabel2('')
    set_initialTaskTimer(0)

    set_editToggleTaskName(false)
    set_editToggleTaskLabel1(false)
    set_editToggleTaskLabel2(false)

    set_timerSetup(false)
  }

  const modalDecisionToTask = (decision: boolean) => {
    if(decision){
      handleDeleteTask('send', taskInfo)
    } else{
      modalTaskControl('delete', false)
    }
  }

  const modalTaskControl = (modal: string, turn: boolean) => {
    if(modal === 'create'){
      set_modalOnCreateTask(turn)
      modalReset()
    }
    if(modal === 'edit'){
      set_modalOnEditTask(turn)
      modalReset()
    }
    if(modal === 'status'){
      set_modalOnStatusTask(turn)
    }
    if(modal === 'timer'){
      set_modalOnTimerTask(turn)
    }
    if(modal === 'delete'){
      set_modalOnDeleteTask(turn)
    }
  }

  const handleCreateTask = (step: string) => {
    if(step === 'modal'){
      modalTaskControl('create', true)
    }
    if(step === 'send'){
      const body = {
        taskId: idMaker(),
        taskName: inputTaskName,
        taskLabel1: inputTaskLabel1,
        taskLabel2: inputTaskLabel2,
        taskStatus: 'none',
        timesheetAdd: [initialTaskTimer],
        timesheetDiscount: []
      }

      createTask(body)
      modalTaskControl('create', false)
      set_watcher(watcher + 1)
    }
  }

  const handleEditTask = (step: string, task: TypedTasks) => {
    if(step === 'modal'){
      modalTaskControl('edit', true)
      set_taskInfo(task)

      set_inputTaskName(task.taskName)
      set_inputTaskLabel1(task.taskLabel1)
      set_inputTaskLabel2(task.taskLabel2)
    }

    if(step === 'send'){
      const body = {
        taskId: task.taskId,
        taskName: inputTaskName,
        taskLabel1: inputTaskLabel1,
        taskLabel2: inputTaskLabel2,
        taskStatus: task.taskStatus,
        timesheetAdd: task.timesheetAdd,
        timesheetDiscount: task.timesheetDiscount
      }

      editTask(body)
      modalTaskControl('edit', false)
    }
  }

  const handleStatusTask = (step: string, task: TypedTasks | string) => {
    if(step === 'modal'){
      modalTaskControl('status', true)
      set_taskInfo(task)
    }

    if(step === 'send'){
      const status = task as string

      const body = {
        taskId: taskInfo.taskId,
        taskName: taskInfo.taskName,
        taskLabel1: taskInfo.taskLabel1,
        taskLabel2: taskInfo.taskLabel2,
        taskStatus: status,
        timesheetAdd: taskInfo.timesheetAdd,
        timesheetDiscount: taskInfo.timesheetDiscount
      }

      statusTask(body)
      modalTaskControl('status', false)
    }
  }

  const handleTimerTask = (step: string, task: TypedTasks) => {
    if(step === 'modal'){
      modalTaskControl('timer', true)
      set_taskInfo(task)
    }
    if(step === 'send'){
      let body

      if(timerSetup){
        body = {
          taskId: task.taskId,
          taskName: task.taskName,
          taskLabel1: task.taskLabel1,
          taskLabel2: task.taskLabel2,
          taskStatus: task.taskStatus,
          timesheetAdd: [...task.timesheetAdd, initialTaskTimer],
          timesheetDiscount: task.timesheetDiscount
        }
      } else{
        body = {
          taskId: task.taskId,
          taskName: task.taskName,
          taskLabel1: task.taskLabel1,
          taskLabel2: task.taskLabel2,
          taskStatus: task.taskStatus,
          timesheetAdd: task.timesheetAdd,
          timesheetDiscount: [...task.timesheetDiscount, initialTaskTimer],
        }
      }

      timerTask(body)
      modalTaskControl('timer', false)
      set_watcher(watcher + 1)
      modalReset()
    }
  }

  const handleDeleteTask = (step: string, task: TypedTasks) => {
    if(step === 'modal'){
      modalTaskControl('delete', true)
      set_taskInfo(task)
    }
    if(step === 'send'){
      deleteTask(taskInfo.taskId)
    }
  }

  const handleFormball = () => {
    const body = {
      taskId: idMaker(),
      taskName: inputTaskName,
      taskLabel1: '',
      taskLabel2: '',
      taskStatus: 'none',
      timesheetAdd: [],
      timesheetDiscount: []
    }

    createTask(body)
    set_inputTaskName('')
  }

  return(
    <Style.Container>
      <CompFormball 
        textFormball={inputTaskName}
        set_textFormball={set_inputTaskName}
        handleFormball={handleFormball}
        placeholderFormball={'write an Task name'}
        handleCreate={handleCreateTask}
        openMore={true}
      />

      <Style.ContentTasks>
        <ul>
          {dataTasks?.map((task: TypedTasks) => 
            <li>
              <CompTasksCard 
                key={task.taskId}
                task={task} 
                handleEditTask={handleEditTask}
                handleStatusTask={handleStatusTask}
                handleTimerTask={handleTimerTask}
                handleDeleteTask={handleDeleteTask}
              />
            </li>
          )}
        </ul>
      </Style.ContentTasks>

      {modalOnCreateTask && (
        <ModalPrompt
          modalOpened={modalOnCreateTask}
          set_modalOpened={set_modalOnCreateTask}
          modalWidth={350}
          modalHeight={400}
          backdropClose={false}
        >
          <Style.ModalCreateTask>
            <h2>Create Task</h2>

            <section className='createTask--name'>
              <div className='createTask--content'>
                <label>Name</label>
                <input 
                  value={inputTaskName}
                  onChange={(event) => set_inputTaskName(event.target.value)}
                  placeholder={'write an name'}
                />
              </div>
            </section>

            <section className='createTask--extras'>
              <div className='createTask--content'>
                <label>{dataLabels[0]}</label>
                <input 
                  value={inputTaskLabel1}
                  onChange={(event) => set_inputTaskLabel1(event.target.value)}
                  placeholder={`write an ${dataLabels[0]}`}
                  />
              </div>
              <div className='createTask--content'>
                <label>{dataLabels[1]}</label>
                <input 
                  value={inputTaskLabel2}
                  onChange={(event) => set_inputTaskLabel2(event.target.value)}
                  placeholder={`write an ${dataLabels[1]}`}
                />
              </div>
            </section>

            <section>
              <CompCountCamp 
                initialTaskTimer={initialTaskTimer}
                set_initialTaskTimer={set_initialTaskTimer}
              />
            </section>

            <section>
              <Base.ModalSuccess onClick={() => handleCreateTask('send')}>Create</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalTaskControl('create', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.ModalCreateTask>
        </ModalPrompt>
      )}
      {modalOnEditTask && (
        <ModalPrompt
          modalOpened={modalOnEditTask}
          set_modalOpened={set_modalOnEditTask}
          modalWidth={350}
          modalHeight={'fit-content'}
        >
          <Style.ModalEditTask>
            <h2>Edit an Task</h2>

            <section>
              <p className='label'>Name:</p>
              <CompEditCamp
                editToggle={editToggleTaskName}
                set_editToggle={set_editToggleTaskName}
                campText={inputTaskName}
                set_campText={set_inputTaskName}
              />
            </section>

            <section>
              <p className='label'>{dataLabels[0]}:</p>
              <CompEditCamp
                editToggle={editToggleTaskLabel1}
                set_editToggle={set_editToggleTaskLabel1}
                campText={inputTaskLabel1}
                set_campText={set_inputTaskLabel1}
              />
            </section>

            <section>
              <p className='label'>{dataLabels[1]}:</p>
              <CompEditCamp
                editToggle={editToggleTaskLabel2}
                set_editToggle={set_editToggleTaskLabel2}
                campText={inputTaskLabel2}
                set_campText={set_inputTaskLabel2}
              />
            </section>

            <section>
              <Base.ModalSuccess onClick={() => handleEditTask('send', taskInfo)}>Accept</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalTaskControl('edit', false)}>Cancel</Base.ModalDecline>
            </section>
          </Style.ModalEditTask>
        </ModalPrompt>
      )}
      {modalOnStatusTask && (
        <ModalPrompt
          modalOpened={modalOnStatusTask}
          set_modalOpened={set_modalOnStatusTask}
          modalWidth={'fit-content'}
          modalHeight={'fit-content'}
          backdropClose={true}
        >
          <Style.ModalStatusTask>
            {dataStatus?.map((status) => {
              return(
                <button 
                  value={status.id}
                  style={{
                    backgroundColor: status.color, 
                    color: status.text ? 'black' : 'white', 
                    outline: `4px solid ${status.color}`, 
                    border: `2px solid ${status.color}`
                  }}
                  onClick={(event: any) => handleStatusTask('send', event.target.value)}
                >
                  {status.label}
                </button>
              )
            })}
          </Style.ModalStatusTask>
        </ModalPrompt>
      )}
      {modalOnTimerTask && (
        <ModalPrompt
          modalOpened={modalOnTimerTask}
          set_modalOpened={set_modalOnTimerTask}
          modalWidth={350}
          modalHeight={'fit-content'}
          backdropClose={true}
        >
          <Style.ModalTimerTask setup={timerSetup}>
            <h2>Send a Timer</h2>

            <section className='timerTask--setup'>
              <button onClick={() => set_timerSetup(!timerSetup)}>
                <IoArrowRedo />
              </button>
            </section>

            <section>
              <CompCountCamp 
                initialTaskTimer={initialTaskTimer}
                set_initialTaskTimer={set_initialTaskTimer}
              />
            </section>

            <section>
              <Base.ModalSuccess onClick={() => handleTimerTask('send', taskInfo)}>Accept</Base.ModalSuccess>
              <Base.ModalDecline onClick={() => modalTaskControl('timer', false)}>Decline</Base.ModalDecline>
            </section>
          </Style.ModalTimerTask>
        </ModalPrompt>
      )}
      {modalOnDeleteTask && (
        <ModalConfirm 
          modalOpened={modalOnDeleteTask}
          set_modalOpened={set_modalOnDeleteTask}
          modalHeading={'You is certain to delete this task?'}
          modalDecision={modalDecisionToTask}
        />
      )}
    </Style.Container>
  )
}


