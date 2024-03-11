import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';


import { SnackContext } from '../../../contexts/SnackContext'

//incluir página como export default
export default function Drinks() {
  const {drinks} = useSnack()

  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
