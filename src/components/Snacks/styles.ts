import styled from 'styled-components';

//importando biblioteca que calcula uma cor para ser mais clara ou escura
import { darken } from 'polished'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  // estilização para mobile
  @media (max-width: 500px) {
    //uma unidade
    grid-template-columns: 1fr;
  }
  .snack{
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: ${({ theme }) => theme.fontSize['3xl']};
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        //quando ocorrer o evento over (mause em cima), vai pegar 0.1 da cor vermelha
        &:hover {
          background: ${darken(0.1, '#AA2424')};
        }
      }
    }

  }

`
