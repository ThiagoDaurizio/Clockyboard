import styled from "styled-components";

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border-radius: 15px;
  margin-bottom: 30px;
  background-color: var(--whiteColor);
  color: var(--blackColor);
  height: ${(props) => props.isOpen ? '120px' : '70px'};
  transition: height 0.15s;
  max-width: 90vw;
`

export const ContentTop = styled.div<ContainerProps>`
  display: flex;
  
  .contentTop--statusFields{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
  }

  .contentTop--statusFields .contentTop--statusFields-select{
    display: flex;
    width: 230px;
    margin-top: 20px;


    select{
      width: 100%;
      height: 30px;
      text-align: center;
      border-radius: 10px 10px 2px 2px;
      background-color: var(--whiteLighter);
      outline: 2px solid var(--primaryColor);
      color: var(--blackLighter);
      -webkit-appearance:none;
      -moz-appearance:none;
      -ms-appearance:none;
      appearance:none;
      box-shadow:none;
      border:0!important;
      background-image: none;
      flex: 1;
      padding: 0 .5em;
      cursor:pointer;
      font-size: 0.9em;
      text-transform: uppercase;
      transition: 0.15s;
      position: relative;
      z-index: 2;
    }

    &::after{
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 50% 50%;
      width: 15px;
      height: 15px;
      background-color: var(--primaryColor);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;
      z-index: 1;
    }

    select:hover{
      filter: drop-shadow(0 0 3px var(--primaryColor));
    }

    select option:disabled{
      color: var(--blackLighter)
    }

    select option{
      color: var(--whiteDarker);
      background-color: var(--blackLighter);
    }
  }



  .contentTop--interactFields{
    background-color: green;
    display: flex;
    position: relative;
  }

  .contentTop--interactFields .contentTop--interactFields-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: var(--primaryColor);
    margin: 0 10px;
    position: absolute;
    z-index: 2;
    top: 40px;
    left: -45px;
    font-size: 1.5em;
    color: var(--whiteColor);
    cursor: pointer;
    outline: 1px solid var(--primaryLighter);
    transition: transform 0.35s;
    transform: ${(props) => props.isOpen ? 'rotate(315deg)' : 'none'};
  }

  .contentTop--interactFields .contentTop--interactFields-order{
    display: flex;
    gap: 15px;
    opacity: ${(props) => props.isOpen ? '1' : '0'};
    transition: 0.35s opacity;
    position: absolute;
    top: -30px;
    left: 200px;
    z-index: ${(props) => props.isOpen ? '1' : '-1'};
  }

  .contentTop--interactFields .contentTop--interactFields-order .contentTop--interactFields-order-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blackDarker);
    width: 35px;
    height: 35px;
    border: 2px solid var(--whiteColor);
    border-radius: 50%;
    color: var(--whiteColor);

    svg{
      width: 26px;
      height: 26px;
      border: 4px solid var(--blackDarker);
      border-radius: 50%;
      transition: 0.45s;
      cursor: pointer;
    }
  }

  .contentTop--interactFields .contentTop--interactFields-order .contentTop--interactFields-order-btn:hover svg{
    background-color: var(--primaryColor);
    border: 2px solid var(--primaryColor);
    color: var(--blackColor);
  }

  .contentTop--interactFields .contentTop--interactFields-order .contentTop--interactFields-order-btn:active svg{
    filter: drop-shadow(0 0 5px var(--primaryColor));
  }

  .contentTop--textsFields{
    margin-top: 20px;
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .contentTop--textsFields .contentTop--textsFields-branch{
    position: relative;
    display: flex;
    border-radius: 30px;
    padding: 5px 10px;
    align-items: center;
    background-color: var(--blackLighter);
    min-width: 100px;
    color: var(--whiteDarker);
    outline: 1px solid var(--primaryColor);
    transition: 0.35s;
    cursor: pointer;

    &:active p{
      filter: drop-shadow(0 0 3px var(--primaryColor));
    }
  }

  .contentTop--textsFields .contentTop--textsFields-name{
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--blackLighter);
    border-radius: 30px;
    padding: 5px 10px;
    color: var(--whiteDarker);
    width: 75%;
    outline: 1px solid var(--primaryColor);
    transition: 0.35s;
    cursor: pointer;

    p{
      white-space: nowrap;
      overflow: hidden;
    }

    &:active p{
      filter: drop-shadow(0 0 3px var(--primaryColor));
    }
  }

  label{
    color: var(--whiteColor);
    font-size: 0.70em;
    border-radius: 30px;
    position: absolute;
    top: -9px;
    left: 15px;
    background-color: var(--blackLighter);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 15px;
    border-top: 1px solid var(--primaryColor);
  }

`

export const ContentBottom = styled.div<ContainerProps>`
  position: relative;
  padding: 10px 20px;
  display: flex;
  margin-top: 10px;
  opacity: ${(props) => props.isOpen ? '1' : '0'};

  .contentBottom--textFields{
    outline: 1px solid var(--primaryColor);
    border-radius: 30px;
    background-color: var(--blackLighter);
    cursor: pointer;
    min-height: 30px;

    label{
      color: var(--whiteColor);
      font-size: 0.70em;
      border-radius: 30px;
      position: absolute;
      top: 2px;
      left: 35px;
      background-color: var(--blackLighter);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85px;
      height: 15px;
      border-top: 1px solid var(--primaryColor);
      z-index: 2;
    }

    p{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-overflow: "…";
      min-width: 150px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 5px 15px;
      color: var(--whiteDarker);
    }

    &:active p{
        filter: drop-shadow(0 0 3px var(--primaryColor));
    }
  }

  .contentBottom--times{
    margin-left: 5px;
    display: flex;
  }

  .contentBottom--timesActual p{
    display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      color: var(--whiteDarker);
      background-color: var(--blackLighter);
      min-width: 95px;
      height: 30px;
      border-radius: 15px;
      border-left: 4px solid var(--primaryDarker);
      border-right: 4px solid var(--primaryDarker);
      margin: 0 5px;
  }

  .contentBottom--timesAdd, .contentBottom--timesDiscount{
    position: relative;

    &::after{
      content: 'timers';
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%);
      font-size: 0.7em;
      background-color: var(--blackLighter);
      border-radius: 1px 1px 5px 5px;
      padding: 0 5px;
      color: var(--whiteDarker);
    }

    select{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      color: var(--whiteDarker);
      background-color: var(--blackLighter);
      min-width: 65px;
      height: 25px;
      border-radius: 15px 15px 2px 2px;
      -webkit-appearance:none;
      -moz-appearance:none;
      -ms-appearance:none;
      appearance:none;
      text-align: center;
      cursor: pointer;
    }
  }

  .contentBottom--timesAdd{
    select{
      border-left: 4px solid var(--optionAccept);
      border-right: 4px solid var(--optionAccept);
    }

    select option{
      color: var(--optionAccept);
    }
  }

  .contentBottom--timesDiscount{
    select{
      border-left: 4px solid var(--optionDecline);
      border-right: 4px solid var(--optionDecline);
    }

    select option{
      color: var(--optionDecline);
    }
  }
`


type PropsContentStatus = {
  statusContent: string
  statusText: boolean
}

export const ContentStatus = styled.div<PropsContentStatus>`
  background-color: ${(props) => props.statusContent};
  display: flex;
  position: absolute;
  top: -20px;
  text-transform: uppercase;
  width: 175px;
  height: 25px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 5px 5px 15px 15px;
  outline: 4px solid var(--whiteColor);
  cursor: pointer;
`