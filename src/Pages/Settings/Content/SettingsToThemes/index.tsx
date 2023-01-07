import * as Style from './style'

export const SettingsToTheme = () => {



  const handleTheme = (theme: string) => {
    if(theme === 'blue'){
      document.documentElement.style.setProperty('--primaryColor', '#2196f3')
      document.documentElement.style.setProperty('--primaryLighter', '#6ec6ff')
      document.documentElement.style.setProperty('--primaryDarker', '#0069c0')
      // document.documentElement.style.setProperty('--blackColor', '#fafafa')
      // document.documentElement.style.setProperty('--blackLighter', '#ffffff')
      // document.documentElement.style.setProperty('--blackDarker', '#c7c7c7')
      // document.documentElement.style.setProperty('--whiteColor', '#212121')
      // document.documentElement.style.setProperty('--whiteLighter', '#484848')
      // document.documentElement.style.setProperty('--whiteDarker', '#000000')
    }
    if(theme === 'green'){
      document.documentElement.style.setProperty('--primaryColor', '#81c784')
      document.documentElement.style.setProperty('--primaryLighter', '#b2fab4')
      document.documentElement.style.setProperty('--primaryDarker', '#519657')
    }
  }


  return(
    <Style.Container>
        <div className='theme--container'>
          <div className='theme--top'>
            <h4>Choose an Theme</h4>
          </div>

          <div className='theme--bottom'>
            <section className='theme--bottom-section'>
              <span className='theme--opt1' onClick={() => handleTheme('blue')}></span>
              <p>Name</p>
            </section>
            <section className='theme--bottom-section'>
              <span className='theme--opt2' onClick={() => handleTheme('green')}></span>
              <p>Name</p>
            </section>
          </div>
        </div>
    </Style.Container>
  )
}