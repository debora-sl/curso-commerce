import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { getDrinks } from '../../../services/api'

//incluir página como export default
export default function Drinks() {
  //declarando o state
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const drinkRequest = await getDrinks()

      setDrinks(drinkRequest.data)
    })()
  }, [])

  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
