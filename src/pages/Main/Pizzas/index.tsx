import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { getPizzas } from '../../../services/api'

//incluir página como export default
export default function Pizzas() {
  //declarando o state
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas()

      setPizzas(pizzaRequest.data)
    })()
  }, [])

  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
