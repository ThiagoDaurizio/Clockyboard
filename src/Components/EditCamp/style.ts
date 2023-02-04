import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 30px;
  
  &:last-child{
    justify-content: center;
  }

  p{
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 260px;
  }

  p._title{
    color: ${(props) => props.theme.textColor};
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.blackLighter};
    color: ${(props) => props.theme.textLighter};
    border: 1px solid ${(props) => props.theme.lineLighter};
    border-radius: 15px;
    padding: 1rem;
    max-width: 260px;
  }

  svg{
    font-size: 1.75em;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    transition: 0.35s;

    &:hover{
      filter: drop-shadow(0 0 2px ${(props) => props.theme.shadowDarker});
      transform: translateY(-3px);
    }
  }
`

