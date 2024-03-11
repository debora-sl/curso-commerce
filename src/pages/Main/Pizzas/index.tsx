import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';


//incluir página como export default
export default function Pizzas() {
  const {pizzas} = useSnack()

  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
