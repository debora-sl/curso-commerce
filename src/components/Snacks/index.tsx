import { currencyFormat } from '../../helpers/currencyFormat'
import { SnackData } from '../../interfaces/SnackData'
import { SkeletonSnack } from './SkeletonSnack'
import { Container } from './styles'

//importando o ícone de mais, da biblioteca react-icons
import { FiPlus } from 'react-icons/fi'

interface SnacksProps{
  snacks: SnackData[]
}

export function Snacks({snacks}: SnacksProps){
  return (
    <Container>
      {/*if para Loading da tela */}
      {!snacks.length ?
        [1,2,3,4].map((n) => <SkeletonSnack key={n}/>)
        :
      /*maap, para iterar os snacks */
        snacks.map((snack) => (
      /*dado que a div está dentro do maap, precisa de uma Key */
      <div key={snack.id} className='snack'>
        <h2>{snack.name}</h2>
        <img src={snack.image} alt={snack.name} />
        <p>{snack.description}</p>
        <div>
          <strong>{currencyFormat(snack.price)}</strong>
          <button type='button'>
            {/* utilizando o icone de + */}
            <FiPlus />
          </button>
        </div>
      </div>
      ))}
    </Container>
  )
}
