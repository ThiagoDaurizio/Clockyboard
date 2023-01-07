import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *, input, button{
    border: none;
    outline: none;
    background-color: transparent;
  }

  :root{
    --primaryColor: #81c784;
    --primaryLighter: #b2fab4;
    --primaryDarker: #519657;

    --blackColor: #212121;
    --blackLighter: #484848;
    --blackDarker: #000000;

    --whiteColor: #fafafa;
    --whiteLighter: #ffffff;
    --whiteDarker: #c7c7c7;

    --textColor: #ffffff;
    --textTier2: #cfd8dc;
    --textTier3: #81d4fa;

    --lighter: rgba(255, 255, 255, 0.5);
    --darker: rgba(15, 15, 15, 0.5);

    --optionAccept: #00e676;
    --optionDecline: #e65100;

    --background: url('https://w0.peakpx.com/wallpaper/554/709/HD-wallpaper-sci-fi-city.jpg');
  }

  html{
    font-family: 'Roboto', sans-serif;
  }

  body{
    min-width: 100%;
    min-height: 100vh;
  }
`