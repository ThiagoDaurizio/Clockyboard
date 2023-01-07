import * as Style from './style'
import { SettingsToStatus } from './Content/SettingsToStatus'
import { SettingsToLabels } from './Content/SettingsToLabels'
import { SettingsToTheme } from './Content/SettingsToThemes'

export const PageSettings = () => {


  return(
    <Style.Container>
      <section>
        <SettingsToStatus/>
      </section>

      <section>
        <SettingsToTheme />
        <SettingsToLabels />
      </section>
    </Style.Container>
  )
}