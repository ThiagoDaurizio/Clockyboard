import * as Style from './style'

type Props = {
  inputText: string
  set_inputText: React.Dispatch<React.SetStateAction<string>>
  labelText?: string
  className?: string
  style?: {}
}

export const CompInputCamp = ({ 
    inputText, 
    set_inputText, 
    labelText, 
    className = '',
    style
  }: Props) => {

  return (
    <Style.Container isEmpity={inputText} style={style}>
      <label>
        <input
          className={className}
          value={inputText}
          onChange={(event) => set_inputText(event.target.value)}
        />
        {labelText && <span>{labelText}</span>}
      </label>
    </Style.Container>
  )
}