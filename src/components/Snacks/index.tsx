//importando o ícone de mais, da biblioteca react-icons
import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'
import { SnackData } from '../../interfaces/SnackData'
import { useCart } from '../../hooks/useCart'

import { SkeletonSnack } from './SkeletonSnack'

import { Container } from './styles'

interface SnacksProps{
  snacks: SnackData[]
}

export function Snacks({snacks}: SnacksProps){
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {/*if para Loading da tela */}
      {!snacks.length
      ? [1,2,3,4].map((n) => <SkeletonSnack key={n}/>)
      /*maap, para iterar os snacks */
      : snacks.map((snack) => {
       const snackExistent = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

       return (
          /*dado que a div está dentro do maap, precisa de uma Key */
          <div key={snack.id} className='snack'>
            {snackExistent && <span>{snackExistent.quantity}</span>}

            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type='button' onClick={() => addSnackIntoCart(snack)}>
                {/* utilizando o icone de + */}
                <FiPlus />
              </button>
            </div>
          </div>
        )
       }
      )}
    </Container>
  )
}
