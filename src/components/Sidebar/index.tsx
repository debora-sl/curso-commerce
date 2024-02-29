//importando o useState para a lógica de expansão do menu
import { useState } from 'react'

import { Container } from './styles'

//importando as imagens
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar(){
  //constante para o ustate
  const [menuOpen, setMenuOpen] = useState(false)

  //definindo a função para manipular o evento
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    //paddando a propriedade para de "menu aberto para o Container"
    <Container isMenuOpen={menuOpen}>
    <button type='button' onClick={handleToggleMenu}>
      <img src={menuImg} alt='Abrir e fechar o menu' />
    </button>
    <nav>
      <ul>
        <li>
          <a href="#" className='active'>
            <BurgerIcon />
            <span>Hambúrgueres</span>
          </a>
        </li>
        <li>
          <a href="#">
            <PizzaIcon />
            <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SodaIcon />
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <IceCreamIcon />
            <span>Sorvetes</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
  )
}
