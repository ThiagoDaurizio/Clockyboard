import styled from "styled-components";


export const Container = styled.div`
  width: 45%;
  max-width: 90vw;
  display: flex;
  gap: 1rem;
  color: var(--blackColor);
  margin: 1rem 0;
`

type PropsContent = {
  isImportant: boolean
}

export const Content = styled.div<PropsContent>`
  width: 100%;
  min-height: 50px;
  height: 100%;
  background-color: var(--whiteColor);
  border-radius: 10px;
  padding: 1rem 0.5rem;
  outline: ${(props) => props.isImportant ? '3px solid var(--primaryColor)' : 'none'};
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
    filter: drop-shadow(0 0 1px var(--whiteDarker));
    cursor: pointer;
  }
  
  .text{
    color: var(--blackColor);
  }

  .title{
    color: var(--primaryColor);
    font-size: 1.1em;
    font-weight: 400;
    padding: 0 10px;
  }

  p:active{
    color: var(--primaryLighter);
    filter: drop-shadow(0 0 2px var(--primaryLighter));
  }

  .content--heart{
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 2em;
    color: var(--primaryColor);
    filter: drop-shadow(0 0 2px var(--blackLighter));
  }

  &:hover{
    box-shadow: 2px 2px 2px var(--darker);
  }
`

type PropsInteract = {
  boxOpened: boolean
}

export const Interact = styled.div<PropsInteract>`
  width: ${(props) => props.boxOpened ? '125px' : '25px'};
  min-width: ${(props) => props.boxOpened ? '125px' : '25px'};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--whiteColor);
  border-radius: 10px;
  padding: 1rem 0.5rem;
  transition: 0.35s;
  position: relative;
  z-index: 1;

  span{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.boxOpened ? '1em' : '0'};
    width: ${(props) => props.boxOpened ? '30px' : '5px'};
    height: ${(props) => props.boxOpened ? '30px' : '5px'};
    border-radius: 50%;
    background-color: var(--blackDarker);
    transition: 0.35s;
    color: var(--whiteColor);
    border: 2px solid var(--blackColor);
    cursor: pointer;
    z-index: 2;
  }

  span:hover{
    color: var(--blackColor);
    background-color: var(--primaryColor);
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
  background-color: var(--whiteDarker);
  margin: 10px 15px;
  border-radius: 50%;
`

