import * as Style from './style'
import { IoChevronUpOutline, IoCloseOutline,
  IoPlanetOutline, IoTimeOutline, IoReaderOutline, IoCalculatorOutline, IoSettingsOutline
} from "react-icons/io5";
import { useEffect, useState } from 'react';
import { idMaker } from '../../Utilities/idMaker';
import { Link } from 'react-router-dom';


const navLinks = [
  {id: idMaker(), labelText: 'Home', labelIcon: <IoPlanetOutline/>, labelLink: '/'},
  {id: idMaker(), labelText: 'Times', labelIcon: <IoTimeOutline/>, labelLink: '/tool/timer'},
  {id: idMaker(), labelText: 'Notes', labelIcon: <IoReaderOutline/>, labelLink: '/tool/notes'},
  {id: idMaker(), labelText: 'Calculate', labelIcon: <IoCalculatorOutline/>, labelLink: '/tool/calculator'},
  {id: idMaker(), labelText: 'Settings', labelIcon: <IoSettingsOutline/>, labelLink: '/settings'},
]

export const CompNavBall = () => {
  const [isClosed, set_isClosed] = useState<boolean>(true)
  const [actualPage, set_actualPage] = useState<string | null>('MENU')
  const [menu, set_menu] = useState<any>()

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'backdrop'){
      set_isClosed(true)
    }
  }

  const handleMenuLink = (option: string) => {
    localStorage.setItem('daurizioClockyboardMenu', option)
    set_actualPage(option)
  }

  useEffect(() => {
    set_menu(navLinks.map((item) => {
      return(
        <Link to={item.labelLink} onClick={() => handleMenuLink(item.labelText)}>
          <li>
            <p>{item.labelIcon}</p>
            <p>{item.labelText}</p>
          </li>
    
          <div className='separator'/>
        </Link>
      )
    }))

    const selected = localStorage.getItem('daurizioClockyboardMenu')
    set_actualPage(selected)

    if(selected){
      console.log('visao', selected)
      set_actualPage(selected)
    } else{
      localStorage.setItem('daurizioClockyboardMenu', 'Home')
      set_actualPage('Home')
    }
  }, [])

  return(
    <Style.Container>
      {!isClosed &&(
        <Style.Backdrop id={'backdrop'} onClick={(event: any) => handleBackdrop(event)}/>
      )}
      <Style.Navball isClosed={isClosed}>
        <div className='navball-icon' onClick={() => set_isClosed(!isClosed)} >
          {isClosed ?
            <IoChevronUpOutline/>
            :
            <IoCloseOutline/>
          }
          <p>{actualPage}</p>
        </div>
        <ul>
          {menu}
        </ul>
      </Style.Navball>
    </Style.Container>
  )
}