import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

//incluir página como export default
export default function IceCreams() {
  const {iceCreams} = useSnack()

  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
