import styled from 'styled-components'

export const Container = styled.div`

  .theme--container{
    background-color: ${(props) => props.theme.neutralLighter};
    width: 200px;
    height: 225px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .theme--top{
    color: ${(props) => props.theme.textDarker};
    margin: 0 auto;
  }

  .theme--bottom{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .theme--bottom-section{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .theme--bottom-section span{
    width: 25px;
    height: 25px;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.lineDarker};
    border-radius: 5px;
  }

  .theme--bottom-section p{
    color: ${(props) => props.theme.textDarker};
  }

  .theme--opt1{
    background-color: #2196f3;
  }

  .theme--opt2{
    background: #81c784
  }
`