import styled from "styled-components";


export const Container = styled.div`


`




export const ModalCreateNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;
  max-width: 90vw;

  h2{
    width: 100%;
    text-align: center;
  }

  section{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    input{
      border: 1px solid var(--whiteDarker);
      background-color: var(--blackLighter);
      color: var(--primaryColor);
      border-radius: 15px;
      padding: 5px 10px;
      position: relative;
      transition: 0.25s;
      opacity: 0;
      z-index: -1;
      width: 100%;
    
      &:focus{
        border: 1px solid var(--primaryColor);
        color: var(--whiteDarker);
      }
    }

    input._active{
      opacity: 1;
      z-index: auto;
    }
  
    .modal--createNote-toggle{
      position: relative;
    }

    .modal--createNote-toggle p{
      position: absolute;
      font-size: 0.75em;
      width: 100%;
      bottom: -17px;
      font-weight: 500;
      transition: 0.25s;
      opacity: 0;
    }

    .modal--createNote-toggle p._active{
      color: var(--primaryColor);
      opacity: 1;
    }
  }
`

export const ModalEditNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 90vw;
  gap: 2rem;

  h2{
    text-align: center;
  }

  section{
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
    text-overflow: "…";
    }

    p._title{
      color: var(--primaryColor);
      font-weight: 500;
    }

    input {
      border: 1px solid black;
      width: 100%;
      height: 100%;
      background-color: var(--blackLighter);
      color: var(--whiteDarker);
      border: 1px solid var(--whiteDarker);
      border-radius: 15px;
      padding: 1rem;
    }

    svg{
      font-size: 1.75em;
      color: var(--primaryColor);
      cursor: pointer;
      transition: 0.35s;

      &:hover{
        filter: drop-shadow(0 0 2px var(--whiteDarker));
        transform: translateY(-3px);
      }
    }
  }
`