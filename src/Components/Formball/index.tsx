import { useState, SyntheticEvent } from 'react'
import * as Style from './style'
import { IoDocumentTextOutline } from "react-icons/io5";


type Props = {
  textFormball: string
  set_textFormball: React.Dispatch<React.SetStateAction<string>>
  handleFormball: (text: string) => void
  placeholderFormball?: string
  handleCreate?: (step: string) => void
  openMore?: boolean
}

export const CompFormball = ({
    textFormball, 
    set_textFormball, 
    handleFormball, 
    placeholderFormball='write something...',
    openMore = false,
    handleCreate
  }: Props ) => {
  const [inputOpened, set_inputOpened] = useState<boolean>(false)

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    if(textFormball !== ''){
      handleFormball('input')

      set_inputOpened(false)
    }
  }

  const handleInput = (order: string) => {
    if(order === 'setup'){
      set_inputOpened(!inputOpened)
    }
  }

  return(
    <Style.Container inputOpened={inputOpened}>
      <button onClick={() => handleInput('setup')}>+</button>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={placeholderFormball}
          value={textFormball}
          onChange={(event) => set_textFormball(event.target.value)}
          type={'text'}
          required
        />
      </form>
      {inputOpened && openMore ?
        <button className='btn--open' onClick={ () => handleCreate && handleCreate('modal')}><IoDocumentTextOutline/></button>
        :
        null
      }

    </Style.Container>
  )
}