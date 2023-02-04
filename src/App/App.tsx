import * as Style from './style'
import { Router } from "../Router";
import GlobalStyle from "../Styles/GlobalStyle";
import { CompSidebar } from '../Components/Sidebar';
import { GlobalDataContextProvider } from '../Context/GlobalDataContext';
import { TasksContextProvider } from '../Context/TasksContext';
import { LabelContextProvider } from '../Context/LabelsContext';
import { NotesContextProvider } from '../Context/NotesContext';
import { StatusContextProvider } from '../Context/StatusContext';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { themeClassic } from '../Themes/colors';

export const LocalStorageAppStart = {
  dataTasks: [],
  dataNotes: [],
  dataLabels: ['teste1', 'teste2']
}

export const App = () => {
  const [theme, set_theme] = useState(themeClassic)
  return (
    <ThemeProvider theme={theme}>
      <GlobalDataContextProvider>
        <LabelContextProvider>
          <StatusContextProvider>
            <TasksContextProvider>
              <NotesContextProvider>


                <Style.Container>
                  <CompSidebar/>

                  <Style.Content>
                    <Router/>
                  </Style.Content>

                  <GlobalStyle/>
                </Style.Container>


              </NotesContextProvider>
            </TasksContextProvider>
          </StatusContextProvider>
        </LabelContextProvider>
      </GlobalDataContextProvider>
    </ThemeProvider>
  );
}
