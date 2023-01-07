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
    background-color: var(--whiteDarker);
    border-radius: 15px;
    outline: 1px solid var(--whiteDarker);
    cursor: pointer;
  }
  
  label span{
    transform: translateX(2px);
    width: 26px;
    height: 26px;
    background-color: var(--whiteColor);
    border-radius: 50%;
    transition: 0.45s;
    filter: drop-shadow(0 0 1px var(--darker));
  }

  label input:checked ~ span{
    background-color: var(--primaryColor);
    transform: translateX(calc(60px - 28px));
  }

`