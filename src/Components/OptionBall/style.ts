import styled from "styled-components"

type ContainerProps = {
  tooltip: string
  hasTooltip: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.lineDarker};
  border: 2px solid ${(props) => props.theme.neutralLighter};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after{
    content: "${(props) => props.tooltip}";
    color: ${(props) => props.theme.textColor};
    border: 1px solid ${(props) => props.theme.lineColor};
    position: absolute;
    top: calc(-100% + -5px);
    left: calc(35% + 5px);
    transition: 0.35s;
    opacity: 0;
    pointer-events: none;
    background-color: ${(props) => props.theme.neutralMedium};
    padding: 0.15em 0.75em;
    height: 20px;
    min-width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border-radius: 15px 15px 15px 5px;
    z-index: 10;
  }

  &:hover::after{
    opacity: ${(props) =>  props.hasTooltip ? '0.9' : '0'};
  }
  
  svg{
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    padding: 0.15em;
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.lineDarker};
    cursor: pointer;
    transition: 0.25s;
    color: ${(props) => props.theme.textLighter};

    &:hover{
      background-color: ${(props) => props.theme.primaryColor};
      font-size: 1.2em;
      padding: 0.15em;
      border: 2px solid ${(props) => props.theme.lineDarker};
      color: ${(props) => props.theme.textDarker};
    }
  }
`