import styled from "styled-components";
import { TypedClients } from "../../../Types/taskType";


export const Container = styled.div`


`


export const ContentClient = styled.div`
  /* background-color: var(--whiteColor);
  color: var(--blackColor);
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: 0.25rem;
  border-radius: '5px 5px 40px 5px';
  transition: 0.15s;
  transition: border-radius 0.45s;
  margin: 15px 0; */
`


export const ContentTasks = styled.div`
  margin-top: 3rem;

  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }
`

export const ModalCreateTask = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400;
  max-width: 90vw;
  gap: 2rem;
  padding: 2rem;

  h2{
    text-align: center;
  }

  input{
    border: 1px solid black;
  }

  .createTask--content{
    display: flex;
    flex-direction: column;
    align-items: center;

    label{
      display: flex;
      width: 100%;
      padding-left: 1.5rem;
      color: var(--primaryColor);
      font-size: 0.75em;
      text-transform: capitalize;
    }
  }

  .createTask--content:nth-child(2) label{
    display: flex;
    justify-content: flex-end;
    padding-left: 0;
    padding-right: 1.5rem;
  }

  .createTask--name{
    position: relative;

    input{
      width: 100%;
      height: auto;
      background-color: var(--blackLighter);
      color: var(--whiteDarker);
      border: 1px solid var(--whiteDarker);
      border-radius: 15px;
      padding: 5px 10px;
    }
  }

  .createTask--extras{
    display: flex;
    justify-content: space-between;
    position: relative;

    input{
      width: 95%;
      height: auto;
      background-color: var(--blackLighter);
      color: var(--whiteDarker);
      border: 1px solid var(--whiteDarker);
      border-radius: 15px;
      padding: 5px 10px;
    }
  }
`

export const ModalEditTask = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400;
  max-width: 90vw;
  gap: 2rem;
  position: relative;

  h2{
    text-align: center;
  }

  .label{
    color: var(--primaryColor);
    text-align: left;
    font-size: 0.75em;
    transform: translateY(-5px);
  }
`

type ModalTimerTaskProps = {
  setup: boolean
}

export const ModalTimerTask = styled.div<ModalTimerTaskProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;


  .timerTask--setup {

    button{
    transform: ${(props) => props.setup ? 'rotate(270deg)' : 'rotate(90deg)'};
    transition: 0.35s;
    font-size: 2em;
    color: ${(props) => props.setup ? 'var(--optionAccept)' : 'var(--optionDecline)'};

    background-color: var(--blackLighter);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 15px 25px 25px 15px;
    cursor: pointer;
    }
  }
`

export const ModalStatusTask = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 25px;
  padding: 1rem;

  button{
    color: var(--blackColor);
    font-size: 1em;
    font-weight: 600;
    width: 150px;
    height: 45px;
    cursor: pointer;
    border-radius: 10px;
  }
`