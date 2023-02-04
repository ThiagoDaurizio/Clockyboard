import styled from "styled-components";


export const Container = styled.div`
  label input[type='checkbox']{
      display: none;
    }

  label{
    display: flex;
    align-items: center;
    width: 60px;
    height: 30px;
    background-color: ${(props) => props.theme.neutralColor};
    border-radius: 15px;
    cursor: pointer;
  }
  
  label span{
    transform: translateX(2px);
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.theme.neutralLighter};
    opacity: 0.35;
    border-radius: 50%;
    transition: 0.45s;
    filter: drop-shadow(0 0 1px var(--darker));
  }

  label input:checked ~ span{
    background-color: ${(props) => props.theme.primaryColor};
    opacity: 1;
    transform: translateX(calc(60px - 28px));
  }

`