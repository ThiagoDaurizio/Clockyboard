import styled from 'styled-components'

export const Container = styled.div`

.theme--container{
    background-color: var(--whiteColor);
    width: 200px;
    height: 225px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .theme--container .theme--top{
    color: var(--blackColor);
    margin: 0 auto;
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