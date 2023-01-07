import styled from 'styled-components'

export const Container = styled.div`
  .content--settings{
    background-color: var(--whiteColor);
    color: var(--blackColor);
    margin-top: 1rem;
    min-width: 200px;
    width: fit-content;
    height: fit-content;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    button{
      background-color: var(--primaryColor);
      padding: 10px 5px;
      border-radius: 15px;
      color: var(--whiteColor);
      border: 1px solid var(--primaryLighter);
      cursor: pointer;
      width: 100%;
    }
  }
`

export const SettingsModalEditLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 5px;

  section{
    width: 100%;
  }

  .content--input{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }

  .content--btn{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`