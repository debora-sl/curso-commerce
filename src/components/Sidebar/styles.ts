import styled, {css} from 'styled-components';

//incluindo a propriedade isMenuOpen para o Container
interface ContainerProps{
  isMenuOpen: boolean
}

//aside = menu lateral
export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.red};

  // lógica da expansão do menu com o if aninhado, no Arrow Funtion como só tem uma linha, pode ser retirado o return
  ${({ isMenuOpen }) =>
    isMenuOpen
    ? css`
        width: 16.3rem;
      `
    :css`
        width: 7.75rem;
    `}

  padding: 2rem 0;
  // sem barra de rolamento lateral
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  //animação para a expansão do menu
  transition: width 0.3s;

  //estilização do botão de menu
  button {
    background: none;
    width: 100%;
    border: none;
  }

  //estilização do nav
  nav {
        flex: 1;
        width: 100%;
        height: 100%;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
        }

        li {
            a {
                width: fit-content;
                position: relative;
                padding-left: 1.875rem;
                padding-right: 1.875rem;

                display: flex;
                align-items: center;
                gap: 2rem;

                svg {
                    fill: ${({ theme }) => theme.colors.white};
                    width: 4rem;
                    height: 4rem;
                    transition: fill 0.3s;
                }

                span {
                    font-size: 1rem;
                    font-weight: 500;
                    transition: color 0.3s;
                }

                &.active {
                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        bottom: 0;
                        transform: translateY(-50%);

                        background-color: ${({ theme }) => theme.colors.yellow};
                        width: 5px;
                        height: calc(100% + 10px);

                        border-radius: 0 5px 5px 0;
                    }

                    svg {
                        fill: ${({ theme }) => theme.colors.yellow};
                    }

                    span {
                        color: ${({ theme }) => theme.colors.yellow};
                    }
                }
            }
        }
    }
`
