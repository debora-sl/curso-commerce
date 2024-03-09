import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

//incluir página como export default
export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'O artesanal tamanho familia com três carnes suculentas, queijo e bacon.',
      price: 25.50,
      image: 'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.50,
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    },
  ]

  return(
    //criando o array fixo de dados
    <>
      {/* chamando o componente Head com a propriedade title e informando o conteúdo */}
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
