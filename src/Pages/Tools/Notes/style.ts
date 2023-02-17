import styled from "styled-components";


export const Container = styled.div`


`

export const ModalCreateNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;
  max-width: 90vw;
  padding: 0 15px;

  h2{
    width: 100%;
    text-align: center;
  }

  section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    position: relative;
  }

  p{
    position: absolute;
    top: -5px;
    right: 10px;
    font-size: 0.75em;
    font-weight: 500;
    transition: 0.25s;
    opacity: 0;
  }

  p._active{
    color: ${(props) => props.theme.textColor};
    opacity: 1;
  }

  .modal--createNote-toggle p{
    left: 10px;
    text-align: left;
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
    width: 100%;
    
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
      color: ${(props) => props.theme.textColor};
      font-weight: 500;
    }
  }
`