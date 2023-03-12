import styled from "styled-components";

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.neutralLighter};
  color: ${(props) => props.theme.textDarker};
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border-radius: 15px;
  margin-bottom: 30px;
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

  .contentTop--statusContent{
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
    outline: 4px solid ${(props) => props.theme.neutralLighter};
    cursor: pointer;
  }

  .contentTop--interactFields{
    background-color: green;
    display: flex;
    position: relative;
  }

  .contentTop--interactFields .contentTop--interactFields-btn{
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textLighter};
    border: 1px solid ${(props) => props.theme.lineLighter};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin: 0 10px;
    position: absolute;
    z-index: 2;
    top: 40px;
    left: -45px;
    font-size: 1.5em;
    cursor: pointer;
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

  .contentTop--textsFields{
    margin-top: 20px;
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .contentTop--textsFields .contentTop--textsFields-branch{
    background-color: ${(props) => props.theme.neutralMedium};
    color: ${(props) => props.theme.textNeutral};
    border: 1px solid ${(props) => props.theme.lineColor};
    position: relative;
    display: flex;
    border-radius: 30px;
    padding: 5px 10px;
    align-items: center;
    min-width: 100px;
    transition: 0.35s;
    cursor: pointer;

    &:active p{
      filter: drop-shadow(0 0 3px ${(props) => props.theme.shadowColor});
    }
  }

  .contentTop--textsFields .contentTop--textsFields-name{
    background-color: ${(props) => props.theme.neutralMedium};
    color: ${(props) => props.theme.textNeutral};
    border: 1px solid ${(props) => props.theme.lineColor};
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 5px 10px;
    width: 75%;
    transition: 0.35s;
    cursor: pointer;

    p{
      white-space: nowrap;
      overflow: hidden;
    }

    &:active p{
      filter: drop-shadow(0 0 3px ${(props) => props.theme.shadowColor});
    }
  }

  label{
    background-color: ${(props) => props.theme.neutralMedium};
    color: ${(props) =>  props.theme.textLighter};
    border-top: 1px solid ${(props) => props.theme.lineColor};
    font-size: 0.70em;
    border-radius: 30px;
    position: absolute;
    top: -9px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 15px;
  }

`

export const ContentBottom = styled.div<ContainerProps>`
  position: relative;
  padding: 10px 20px;
  display: flex;
  margin-top: 10px;
  opacity: ${(props) => props.isOpen ? '1' : '0'};

  .contentBottom--textFields{
    background-color: ${(props) => props.theme.neutralMedium};
    outline: 1px solid ${(props) => props.theme.lineColor};
    border-radius: 30px;
    cursor: pointer;
    min-height: 30px;

    label{
      background-color: ${(props) => props.theme.neutralMedium};
      color: ${(props) =>  props.theme.textLighter};
      border-top: 1px solid ${(props) => props.theme.lineColor};
      font-size: 0.70em;
      border-radius: 30px;
      position: absolute;
      top: 2px;
      left: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85px;
      height: 15px;
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
        filter: drop-shadow(0 0 3px ${(props) => props.theme.shadowColor});
    }


  }



  .contentBottom--times{
    margin-left: 5px;
    display: flex;
  }

  .contentBottom--timesActual p{
    background-color: ${(props) => props.theme.neutralMedium};
    color: ${(props) => props.theme.textNeutral};
    border-left: 4px solid ${(props) => props.theme.primaryDarker};
    border-right: 4px solid ${(props) => props.theme.primaryDarker};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    min-width: 95px;
    height: 30px;
    border-radius: 15px;
    margin: 0 5px;
  }

  .contentBottom--timesAdd, .contentBottom--timesDiscount{
    position: relative;

    &::after{
      background-color: ${(props) => props.theme.neutralMedium};
      color: ${(props) => props.theme.textNeutral};
      content: 'timers';
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%);
      font-size: 0.7em;
      border-radius: 1px 1px 5px 5px;
      padding: 0 5px;
    }

    select{
      background-color: ${(props) => props.theme.neutralMedium};
      color: ${(props) => props.theme.textNeutral};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
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