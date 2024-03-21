import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'

import { Container } from '../styles'

export function ConfirmOrder(){
  // pegando o carrinho e chamando o método que confirma o pedido e o usuário navega para a página de pagamento
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return(
    <Container>
      <button type='button' onClick={confirmOrder}>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
