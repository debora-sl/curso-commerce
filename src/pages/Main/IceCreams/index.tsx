import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';

//incluir página como export default
export default function IceCreams() {
  return(
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
    </>
  )
}
