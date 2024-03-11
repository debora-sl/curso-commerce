import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

//incluir página como export default
export default function Burgers() {
  const {burgers} = useSnack()

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
