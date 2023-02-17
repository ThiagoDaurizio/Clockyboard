import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
  gap: 2em;

  p{
    text-align: center;
  }
`


const teste = {
  cris: '45',
  jonas: '22',
  stephan: '26'
}

const variavel = 'cris'

const outra = teste[variavel]