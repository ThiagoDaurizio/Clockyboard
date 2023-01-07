import { turnMinutesInHour } from '../../Utilities/timeSetup'
import * as Style from './style'

type Props = {
  initialTaskTimer: number
  set_initialTaskTimer: React.Dispatch<React.SetStateAction<number>>
}

export const CompCountCamp = ({
    initialTaskTimer,
    set_initialTaskTimer
  }: Props) => {


  const handleInitialTaskTimer = (mode: string) => {
    if(mode === 'add'){
      set_initialTaskTimer(initialTaskTimer + 60)
    }

    if(mode === 'discount' && initialTaskTimer > 0){
      set_initialTaskTimer(initialTaskTimer - 60)
    }
  }

  return(
    <Style.Container>
      <section className='createTask--timer'>
        <button onClick={() => handleInitialTaskTimer('discount')}>-</button>
        <p>{turnMinutesInHour(initialTaskTimer)}</p>
        <button onClick={() => handleInitialTaskTimer('add')}>+</button>
      </section>
    </Style.Container>
  )
}