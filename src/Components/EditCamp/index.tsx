import * as Style from './style'
import { IoOpenOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { CompInputCamp } from '../InputCamp';

type Props = {
  editToggle: boolean
  set_editToggle: React.Dispatch<React.SetStateAction<boolean>>
  campText: string
  set_campText: React.Dispatch<React.SetStateAction<string>>,
  labelText?: string
}

export const CompEditCamp = ({
  editToggle,
  set_editToggle,
  campText,
  set_campText,
  labelText
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
        <CompInputCamp
          inputText={campText}
          set_inputText={set_campText}
          labelText={labelText}
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