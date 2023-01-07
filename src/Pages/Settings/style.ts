import styled from "styled-components";


export const Container = styled.div`




  .theme--container{
    background-color: var(--whiteColor);
    width: 200px;
    height: 300px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .theme--container .theme--top{

  }

  .theme--container .theme--bottom{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .theme--container .theme--bottom .theme--bottom-section{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .theme--container .theme--bottom .theme--bottom-section span{
    width: 25px;
    height: 25px;
    cursor: pointer;
    outline: 1px solid var(--blackColor);
    border-radius: 5px;
  }

  .theme--container .theme--bottom .theme--bottom-section p{
    color: var(--blackColor);
  }

  .theme--container .theme--bottom .theme--bottom-section .theme--opt1{
    background-color: #2196f3;
  }

  .theme--container .theme--bottom .theme--bottom-section .theme--opt2{
    background: #81c784
  }
`

export const ContentTheme = styled.div`
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
`