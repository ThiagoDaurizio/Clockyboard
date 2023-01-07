import { Routes, Route } from 'react-router-dom'
import { PageError } from '../Pages/Error'
import { PageHome } from '../Pages/Home'
import { PageSettings } from '../Pages/Settings'
import { PageCalculator } from '../Pages/Tools/Calculator'
import { PageNotes } from '../Pages/Tools/Notes'
import { PageTimers } from '../Pages/Tools/Tasks'


export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={ <PageHome/> } />
      <Route path='/settings' element={ <PageSettings/> } />
      <Route path='/tool/timer' element={ <PageTimers/> } />
      <Route path='/tool/notes' element={ <PageNotes/> } />
      <Route path='/tool/calculator' element={ <PageCalculator/> } />
      <Route path='*' element={ <PageError/> } />
    </Routes>
  )
}