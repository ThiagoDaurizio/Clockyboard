import styled from "styled-components";


export const Container = styled.div`
  width: 45%;
  max-width: 90vw;
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme.textDarker};
  margin: 1rem 0;
`

type PropsContent = {
  isImportant: boolean
}

export const Content = styled.div<PropsContent>`
  width: 100%;
  min-height: 50px;
  height: 100%;
  background-color: ${(props) => props.theme.neutralLighter};
  border-radius: 10px;
  padding: 1rem 0.5rem;
  position: relative;
  transition: 0.25s;
  
  p{
    max-width: 90%;
    margin: 0 15px 10px 15px;
    transition: filter 0.25s;
    font-size: 0.9em;
    overflow-wrap: break-word;
  }
  
  p:hover{
    filter: drop-shadow(0 0 1px ${(props) => props.theme.neutralColor});
    cursor: pointer;
  }
  
  .text{
    color: ${(props) => props.theme.textDarker};
  }

  .title{
    color: ${(props) => props.theme.textColor};
    font-size: 1.1em;
    font-weight: 400;
    padding: 0 10px;
  }

  p:active{
    color: ${(props) => props.theme.textColor};
    filter: drop-shadow(0 0 2px ${(props) => props.theme.shadowColor});
  }

  .content--heart{
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 2em;
    color: ${(props) => props.theme.textColor};
    filter: drop-shadow(0 0 2px ${(props) => props.theme.shadowColor});
  }

  &:hover{
    box-shadow: 2px 2px 2px var(--darker);
  }
`

type PropsInteract = {
  boxOpened: boolean
}

export const Interact = styled.div<PropsInteract>`
  background-color: ${(props) => props.theme.neutralLighter};
  width: ${(props) => props.boxOpened ? '125px' : '25px'};
  min-width: ${(props) => props.boxOpened ? '125px' : '25px'};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem 0.5rem;
  transition: 0.35s;
  position: relative;
  z-index: 1;

  span{
    background-color: ${(props) => props.theme.neutralDarker};
    color: ${(props) => props.theme.textLighter};
    border: 2px solid ${(props) => props.theme.neutralDarker};
    transition: 0.35s;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.boxOpened ? '1em' : '0'};
    width: ${(props) => props.boxOpened ? '30px' : '5px'};
    height: ${(props) => props.boxOpened ? '30px' : '5px'};
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
  }

  span:hover{
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textDarker};
  }

  span:nth-child(1){
    transform: ${(props) => props.boxOpened ? 'translateX(-35px)' : 'translateY(-13px)'};
  }

  span:nth-child(3){
    transform: ${(props) => props.boxOpened ? 'translateX(35px)' : 'translateY(13px)'};
  }
`

export const Separator = styled.div`
  height: 1px;
  width: 90%;
  background-color: ${(props) => props.theme.neutralColor};
  margin: 10px 15px;
  border-radius: 50%;
`

