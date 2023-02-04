import styled from "styled-components";


export const ModalBackdrop = styled.div`
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

type PropsModalContent = {
  modalWidth: number | undefined | string
  modalHeight: number | undefined | string
}

export const ModalContent = styled.div<PropsModalContent>`
  width: ${(props) => props.modalWidth + 'px'};
  height: fit-content;
  min-height: ${(props) => props.modalHeight + 'px'};
  background-color: ${(props) =>  props.theme.modalBackground};
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blackColor);
  filter: drop-shadow(0 0 15px var(--darker));
`


export const ModalSuccess = styled.button`
  min-width: 90px;
  width: fit-content;
  height: 30px;
  background-color: var(--optionAccept);
  padding: 0.25rem;
  border-radius: 5px;
  color: var(--whiteColor);
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: 0.35s;
  border: 2px solid var(--optionAccept);
  margin: 0.5rem;

  &:hover{
    filter: drop-shadow(0 0 3px var(--optionAccept));
  }
`

export const ModalDecline = styled.button`
  min-width: 90px;
  width: fit-content;
  height: 30px;
  background-color: var(--whiteColor);
  padding: 0.25rem;
  border-radius: 5px;
  color: var(--optionDecline);
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: 0.35s;
  border: 2px solid var(--optionDecline);
  margin: 0.5rem;

  &:hover{
    filter: drop-shadow(0 0 3px var(--optionDecline));
    background-color: var(--optionDecline);
    color: var(--whiteColor);
  }
`