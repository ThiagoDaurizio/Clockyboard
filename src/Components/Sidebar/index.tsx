import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Style from './style'
import { 
  IoPlanetOutline, 
  IoTimeOutline, 
  IoReaderOutline,
  IoCalculatorOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const CompSidebar = () => {
  const [currentPage, set_currentPage] = useState<number>(0)
  const [url] = useState<string>(window.location.pathname)
  const navigate = useNavigate()

  useEffect(() => {
		let navIndex

		switch (url) {
			case '/tool/timer':
				navIndex = 1
        set_currentPage(1)
				break;
			case '/tool/notes':
				navIndex = 2
        set_currentPage(2)
				break;
      case '/tool/calculator':
        navIndex = 3
        set_currentPage(3)
        break;
			case '/settings':
				navIndex = 4
        set_currentPage(4)
				break;
			default:
				navIndex = 0
        set_currentPage(0)
				break;
		}

		const navmenu = document.querySelectorAll('._menuItem')

		navmenu.forEach(element => {
			element.classList.remove('active')
		})
		navmenu[navIndex].classList.add('active')
	}, [])


  const handleMenu = (index: number, path: string) => {
    const navmenu = document.querySelectorAll('._menuItem')

    navmenu.forEach(element => {
      element.classList.remove('active')
    })

    navmenu[index].classList.add('active')
    navigate(path)
  }

  return(
    <Style.Container>
      <Style.Sidebar>
        <div className='sidebar'>
          <ul className='_menuWrapper'>
            <li className='_menuItem' onClick={() => handleMenu(0, '/')}>
              <Link to='/'>
                <span><IoPlanetOutline/></span>
                <p>Home</p>
              </Link>
            </li>
            <li className='_menuItem' onClick={() => handleMenu(1, '/tool/timer')}>
              <Link to='/tool/timer'>
                <span><IoTimeOutline/></span>
                <p>Timer</p>
              </Link>
            </li>
            <li className='_menuItem' onClick={() => handleMenu(2, '/tool/notes')}>
              <Link to='/tool/notes'>
                <span><IoReaderOutline/></span>
                <p>Notes</p>
              </Link>
            </li>
            <li className='_menuItem' onClick={() => handleMenu(3, '/tool/calculator')}>
              <Link to='/tool/calculator'>
                <span><IoCalculatorOutline/></span>
                <p>Calculate</p>
              </Link>
            </li>
            <li className='_menuItem' onClick={() => handleMenu(4, '/settings')}>
              <Link to='/settings'>
                <span><IoSettingsOutline/></span>
                <p>Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      </Style.Sidebar>
    </Style.Container>
  )
}