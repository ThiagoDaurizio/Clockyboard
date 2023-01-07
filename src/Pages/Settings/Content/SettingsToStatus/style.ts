import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--whiteColor);
  color: var(--blackColor);
  width: 265px;
  height: 100%;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .content--heading{
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    button{
      background-color: var(--primaryColor);
      width: 150px;
      height: 35px;
      border-radius: 15px;
      font-size: 1em;
      color: var(--whiteColor);
      cursor: pointer;
      transition: 0.35s;
      border: 1px solid var(--primaryLighter);
    }
  }
`

export const CardStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .contentCard--separator{
    height: 40px;
    min-width: 2px;
    background-color: var(--blackColor);
  }

  .contentCard--info{
    display: flex;
    gap: 5px;
  }
  
  .contentCard--info-color{
    width: 30px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid black;
  }

  .contentCard--info-text{
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  .contentCard--interact{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: var(--blackColor);
      color: var(--whiteColor);
      border-radius: 50%;
      transition: 0.35s;
      cursor: pointer;
      border: 3px solid var(--blackColor);
      font-size: 1.1em;
    
      &:hover{
        background-color: var(--primaryColor);
        color: var(--blackColor);
      }
      
      &:active{
        filter: drop-shadow(0 0 2px var(--primaryColor));
        font-size: 1.2em;
      }
    }
  }
`

export const SettingsModalCreateStatus = styled.div`
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

  label{
    color: var(--primaryColor);
    font-size: 0.75em;
  }

  .content--label{
    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
      width: 100%;
      height: 30px;
      background-color: var(--blackLighter);
      color: var(--whiteDarker);
      border: 1px solid var(--whiteDarker);
      border-radius: 15px;
      padding: 2px 15px;
    }
  }

  .content--color{
    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
      -webkit-appearance: none;
      width: 75%;
      height: 40px;
      border-radius: 15px;
      cursor: pointer;
      margin: auto;
    }
  }

  .content--text{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .content--text-toggle{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 5px;

    p{
      background-color: rgb(125, 125, 125);
      width: 70px;
      height: 30px;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  }

  .content--btn{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`

export const SettingsModalEditStatus = styled.div`
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

  label{
    color: var(--primaryColor);
    font-size: 0.75em;
  }

  .content--label{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .content--color{
    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
      -webkit-appearance: none;
      width: 75%;
      height: 40px;
      border-radius: 15px;
      cursor: pointer;
      margin: auto;
    }
  }

  .content--text{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .content--text-toggle{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 5px;

    p{
      background-color: rgb(125, 125, 125);
      width: 70px;
      height: 30px;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
  }

  .content--btn{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`