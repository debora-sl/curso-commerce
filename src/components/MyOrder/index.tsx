import { useCart } from '../../hooks/useCart'

import { Container } from './styles'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function MyOrder () {
  //usando o hook de cart
  const { cart } = useCart()

  return <Container to={'cart'}>
    <span>Meu Pedido</span>
    <CartIcon />

    {/*Lógica para mostrar a quantidade no carrinho. padStart acrescenta o 0 */}
    {cart.length !==0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
  </Container>
}
