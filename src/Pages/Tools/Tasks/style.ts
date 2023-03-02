import styled from "styled-components";


export const Container = styled.div`


`


export const ContentTasks = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

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
  width: 400px;
  max-width: 90vw;
  gap: 2rem;
  padding: 2rem;

  h2{
    text-align: center;
  }

  section{
    width: 100%;
    padding: 0 20px;
  }
  
  .createTask--row{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .createTask--row-inputs{
    width: 50%;
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
    color: ${(props) => props.theme.textColor};
    text-align: left;
    font-size: 0.75em;
    transform: translateY(-10px);
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

    background-color: ${(props) => props.theme.neutralMedium};
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
    color: ${(props) => props.theme.neutralDarker};
    font-size: 1em;
    font-weight: 600;
    width: 150px;
    height: 45px;
    cursor: pointer;
    border-radius: 10px;
  }
`