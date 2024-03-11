import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

import { getBurgers } from '../../../services/api'

//incluir página como export default
export default function Burgers() {
  //declarando o state
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers()

      setBurgers(burgerRequest.data)
    })()
  }, [])

  return(
    //criando o array fixo de dados
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
