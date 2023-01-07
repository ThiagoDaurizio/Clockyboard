import styled from "styled-components";


export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.5);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`

type PropsContent = {
  modalWidth: number | undefined
  modalHeight: number | undefined
}

export const Content = styled.div<PropsContent>`
  min-width: ${(props) => props.modalWidth ? props.modalWidth + 'px' : '500px'};
  min-height: ${(props) => props.modalHeight ? props.modalHeight + 'px' : '300px'};
  background-color: var(--whiteColor);
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blackColor);
  filter: drop-shadow(0 0 15px var(--darker));
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;

  .modal--text{
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .modal--interact{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  button{
    width: 80px;
    height: 40px;
    color: var(--whiteColor);
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.25s;
    outline: 2px solid var(--darker);
  }

  .modal--interact .modal--interact-confirm{
    background-color: var(--optionAccept);

    &:hover{
      filter: drop-shadow(0 0 3px var(--optionAccept));
      transform: translateY(-2px);
    }
  }

  .modal--interact .modal--interact-cancel{
    background-color: var(--optionDecline);

    &:hover{
      filter: drop-shadow(0 0 3px var(--optionDecline));
      transform: translateY(-2px);
    }
  }
`