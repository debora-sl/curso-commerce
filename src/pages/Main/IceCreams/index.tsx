import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { getIceCreams } from '../../../services/api'


//incluir página como export default
export default function IceCreams() {
  //declarando o state
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    (async () => {
      const iceCreamsRequest = await getIceCreams()

      setIceCreams(iceCreamsRequest.data)
    })()
  }, [])


  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
