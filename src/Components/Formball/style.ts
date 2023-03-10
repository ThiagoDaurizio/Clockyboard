import styled from "styled-components";

type PropsContainer = {
  inputOpened: boolean
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  align-items: center;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: ${(props) => props.inputOpened ? '15px 0 0 15px' : '50%'};
    font-size: 2em;
    font-weight: 300;
    outline: 1px solid ${(props) => props.theme.lineLighter};
    cursor: pointer;
    transition: 0.15s;
    color: ${(props) => props.theme.textLighter};
  }

  form{
    display: flex;
    align-items: center;
  }

  form input {
    width: ${(props) => props.inputOpened ? '350px' : '0px'};
    outline: ${(props) => props.inputOpened ? '1px solid var(--whiteDarker)' : 'none'};
    height: 30px;
    transition: width 0.05s;
    border-radius: 0 15px 15px 0;
    padding: ${(props) => props.inputOpened ? '0 10px' : '0px'};
    color: ${(props) => props.theme.textColor};
    font-size: 1.1em;
    background-color: var(--blackLighter);
  }

  form input:focus{
    outline: ${(props) => props.inputOpened ? `1px solid var(--primaryColor)` : 'none'};
  }
  
  .btn--open{
    transform: translateX(-10px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.blackDarker};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: ${(props) => props.theme.textColor};
    outline: 1px solid ${(props) => props.theme.whiteDarker};
    font-weight: 400;
    font-size: 0.9em;
    cursor: pointer;
    transition: 0.35s;


    &:hover{
      background-color: ${(props) => props.theme.primaryColor};
      filter: drop-shadow(0 0 1px ${(props) => props.theme.shadowColor});
      transform: translateX(-10px) scale(1.15);

      svg{
        color: ${(props) => props.theme.textDarker};
      }
    }
  }
`