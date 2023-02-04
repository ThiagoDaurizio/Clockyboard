import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.neutralLighter};
  color: ${(props) => props.theme.textDarker};
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
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.textLighter};
      border: 1px solid ${(props) => props.theme.textLighter};
      width: 150px;
      height: 35px;
      border-radius: 15px;
      font-size: 1em;
      cursor: pointer;
      transition: 0.35s;
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
    background-color: ${(props) => props.theme.lineDarker};
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
      background-color: ${(props) => props.theme.neutralDarker};
      color: ${(props) => props.theme.textLighter};
      border: 3px solid ${(props) => props.theme.neutralDarker};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: 0.35s;
      cursor: pointer;
      font-size: 1.1em;
    
      &:hover{
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textDarker};
      }
      
      &:active{
        filter: drop-shadow(0 0 2px ${(props) => props.theme.primaryColor});
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
    color: ${(props) => props.theme.textColor};
    font-size: 0.75em;
  }

  .content--label{
    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
      background-color: ${(props) => props.theme.neutralMedium};
      color: ${(props) => props.theme.textLighter};
      border: 1px solid ${(props) => props.theme.lineColor};
      width: 100%;
      height: 30px;
      border-radius: 15px;
      padding: 2px 15px;
    }
  }

  .content--color{
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    input{
      -webkit-appearance: none;
      width: 75%;
      height: 40px;
      border-radius: 15px;
      cursor: pointer;
      margin: auto;
    }
  }

  .content--palletes{
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .content--palletes-card{
    width: 20px;
    height: 20px;
    border: 1px solid var(--darker);
    border-radius: 5px;
    cursor: pointer;
  }

  .content--text{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: ${(props) => props.theme.textColor};
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
    text-align: center;

    input{
      -webkit-appearance: none;
      width: 75%;
      height: 40px;
      border-radius: 15px !important;
      cursor: pointer;
      margin: auto;
    }
  }

  .content--palletes{
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .content--palletes-card{
    width: 20px;
    height: 20px;
    border: 1px solid var(--darker);
    border-radius: 5px;
    cursor: pointer;
  }

  .content--text{
    display: flex;
    flex-direction: column;
    align-items: center;
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