import styled from "styled-components";


export const Container = styled.div`
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.5);
  z-index: 190;
  display: flex;
  justify-content: center;
  align-items: center;
`

type NavballProps = {
  isClosed: boolean
}

export const Navball = styled.div<NavballProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: fit-content;
  height: fit-content;
  color: blue;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  
  a{
    text-decoration: none;
  }

  ul{
    background-color: ${(props) => props.theme.sidebarBackground};
    border-right: 1px solid ${(props) => props.theme.lineLighter};
    border-left: 1px solid ${(props) => props.theme.lineLighter};
    display: flex;
    flex-direction: column;
    min-width: 225px;
    gap: 5px;
    list-style: none;
    padding: ${(props) => props.isClosed ? '0px' : '10px'};
    max-height: ${(props) => props.isClosed ? '0px' : '50vh'};
    transition: 0.5s;
    overflow: hidden;
  }

  li{
    background-color: ${(props) => props.theme.sidebarBackground};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 15px;
    height: 45px;
    transition: 0.35s;
    font-size: 1.4em;
    color: ${(props) => props.theme.textColor};
    transform: translateY(-2px);
  }

  li svg{
    font-size: 1.5em;
    transition: 0.35s;
    transform: translateY(2px);
  }

  li:hover{
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    p{
      color: black
    }
    svg{
      color: white
    }
  }

  .separator{
    width: 90%;
    height: 1px;
    background-color: ${(props) => props.theme.lineLighter};
    border-radius: 50%;
    opacity: 0.5;
    margin: 5px auto;
  }

  .navball-icon{
    background-color: ${(props) => props.theme.neutralLighter};
    border: 1px solid ${(props) => props.theme.lineLighter};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 55px;
    border-radius: 25px 25px 0 0;
    width: 100%;
    position: relative;

    svg{
      background-color: ${(props) => props.theme.sidebarBackground};
      color: ${(props) => props.theme.textColor};
      border: 2px solid ${(props) => props.theme.lineLighter};
      position: absolute;
      width: 35px;
      height: 35px;
      top: -35%;
      border-radius: 50%;
    }

    p{
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.neutralDarker};
      padding: 3px 15px;
      position: absolute;
      bottom: 5px;
      font-size: 1.3em;
      border-radius: 15px;
      height: 30px;
    }
  }
`