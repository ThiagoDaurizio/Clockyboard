import * as Style from './style'
import { IoOpenOutline, IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {
  editToggle: boolean
  set_editToggle: React.Dispatch<React.SetStateAction<boolean>>
  campText: string
  set_campText: React.Dispatch<React.SetStateAction<string>>
}

export const CompEditCamp = ({
  editToggle,
  set_editToggle,
  campText,
  set_campText
}: Props) => {


  const handleKeyboard = (event: string) => {
    if(event === 'Enter'){
      set_editToggle(false)
    }
  }


  return(
    <Style.Container>
      {editToggle ? 
        null
        :
        <IoOpenOutline onClick={() => set_editToggle(true)}/>
      }

      {editToggle ?
        <input 
          value={campText}
          onChange={(event) => set_campText(event.target.value)}
          placeholder={'write something...'}
          onKeyDown={(event) => handleKeyboard(event.key)}
        />
        :
        <p>{campText}</p>
      }

      {editToggle ? 
        <IoCheckmarkDoneOutline onClick={() => set_editToggle(false)}/>
        :
        null
      }
    </Style.Container>
  )
}