import styled from "styled-components";

type Props = {
  isEmpity: string
}

export const Container = styled.div<Props>`
  margin: 15px 0;
  width: 100%;
  transition: .75s opacity;

  label{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 30px;
  }

  input{
    background-color: ${(props) => props.theme.blackLighter};
    border: 1px solid ${(props) => props.theme.lineLighter};
    color: ${(props) => props.theme.textColor};
    position: absolute;
    width: 100%;
    border-radius: 15px;
    height: 100%;
    padding: 3px 15px 0 15px;
    transition: 0.35s;
  }


  span{
    background-color: ${(props) => props.theme.blackLighter};
    color: ${(props) => props.theme.textNeutral};
    transform: ${(props) => props.isEmpity ? 'translate(5px, -145%)' : 'translateY(-50%)'};
    font-size: ${(props) => props.isEmpity ? '0.6em' : '0.9em'};
    opacity: ${(props) => props.isEmpity ? '1' : '0.65'};
    border: 1px solid ${(props) => props.isEmpity ? (props) => props.theme.lineLighter : 'transparent'};

    letter-spacing: 2px;
    padding: 2px 5px;
    border-radius: 30px;
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 15px;
    transition: 0.25s;
  }

  input:focus{
    background-color: ${(props) => props.theme.blackLighter};
    border: 1px solid ${(props) => props.theme.lineColor};
  }

  input:focus ~ span{
    background-color: ${(props) => props.theme.blackLighter};
    border: 1px solid ${(props) => props.theme.lineColor};
    color: ${(props) => props.theme.textLighter};
    transform: translate(5px, -145%);
    font-size: 0.6em;
    opacity: 1;
  }

`