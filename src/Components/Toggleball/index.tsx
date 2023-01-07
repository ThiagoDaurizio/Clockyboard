import * as Style from './style'

type Props = {
  toggle: boolean
  set_toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const CompToggle = ({toggle, set_toggle}: Props) => {

  return(
    <Style.Container>
      <label>
        <input
          type={'checkbox'}
          onChange={() => set_toggle(!toggle)}
          checked={toggle}
          />
        <span></span>
      </label>
    </Style.Container>
  )
}