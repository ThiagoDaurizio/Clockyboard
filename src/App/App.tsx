import * as Style from './style'
import { Router } from "../Router";
import GlobalStyle from "../Styles/GlobalStyle";
import { CompSidebar } from '../Components/Sidebar';
import { GlobalDataContextProvider } from '../Context/GlobalDataContext';
import { TasksContextProvider } from '../Context/TasksContext';
import { LabelContextProvider } from '../Context/LabelsContext';
import { NotesContextProvider } from '../Context/NotesContext';

export const LocalStorageAppStart = {
  dataTasks: [],
  dataNotes: [],
  dataLabels: ['teste1', 'teste2']
}

export const App = () => {
  return (
    <GlobalDataContextProvider>
      <LabelContextProvider>
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
      </LabelContextProvider>
    </GlobalDataContextProvider>
  );
}
