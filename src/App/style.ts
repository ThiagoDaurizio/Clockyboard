import styled from "styled-components";

export const ViewPort = styled.div`
  background-color: ${(props) => props.theme.blackColor};
  background-image: ${(props) => props.theme.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: overlay;
`

export const Container = styled.div`
  display: flex;
  user-select: none;
  justify-content: center;
  position: relative;
  max-width: 1920px;
  min-height: 100vh;
  margin: auto;
`

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.textLighter};
`