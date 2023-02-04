import styled from "styled-components";


export const Container = styled.div`
  .createTask--timer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    margin: auto;

    &:hover p{
      outline: 2px solid ${(props) => props.theme.primaryColor};
      font-size: 1.25em;
    }

    p{
      width: 100%;
      min-width: fit-content;
      height: 30px;
      padding: 0.25rem 1rem;
      background-color: ${(props) => props.theme.blackLighter};
      color: ${(props) => props.theme.primaryColor};
      font-weight: 500;
      font-size: 1.2em;
      border-radius: 5px;
      transition: 0.35s;
    }

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      min-width: 25px;
      min-height: 25px;
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.whiteColor};
      font-size: 1.35em;
      transition: 0.35s;
      cursor: pointer;
      outline: 1px solid ${(props) => props.theme.primaryLighter};

      &:active{
        filter: drop-shadow(0 0 2px ${(props) => props.theme.primaryColor});
      }
    }

    button:nth-child(1){
      border-radius: 15px 2px 2px 15px;
      transform: translateX(3px);

      &:hover{
        transform: translateX(0);
      }
    }

    button:nth-child(3){
      border-radius: 2px 15px 15px 2px;
      transform: translateX(-3px);

      &:hover{
        transform: translateX(0);
      }
    }
  }

`