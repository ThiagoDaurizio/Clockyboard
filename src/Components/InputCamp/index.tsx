import * as Style from './style'

type Props = {
  inputText: string
  set_inputText: React.Dispatch<React.SetStateAction<string>>
  labelText: string
}

export const CompInputCamp = ({ inputText, set_inputText, labelText }: Props) => {

  return (
    <Style.Container isEmpity={inputText}>
      <label>
        <input
          value={inputText}
          onChange={(event) => set_inputText(event.target.value)}
        />
        <span>{labelText}</span>
      </label>
    </Style.Container>
  )
}