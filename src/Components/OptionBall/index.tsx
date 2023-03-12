import { ReactNode } from 'react'
import * as Style from './style'


type Props = {
  labelIcon: ReactNode
  labelText?: string
  hasTooltip?: boolean
}

export const CompOptionBall = ({
    labelIcon, labelText = '', hasTooltip = false
  }: Props) => {

  return(
    <Style.Container tooltip={labelText} hasTooltip={hasTooltip}>
      {labelIcon}
    </Style.Container>
  )
}