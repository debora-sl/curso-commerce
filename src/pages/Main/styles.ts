import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  //estilização para a section imediata (a section de index)
  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    //barra de scroll auto
    overflow-y: auto;
    padding: 3rem 1.875rem;

    //estilização para a logo
    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    //estilização para mobile
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }

  }
`
