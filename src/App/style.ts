import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.blackColor};
  user-select: none;
  background-image: ${(props) => props.theme.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: overlay;
`

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  color: ${(props) => props.theme.textLighter}
`