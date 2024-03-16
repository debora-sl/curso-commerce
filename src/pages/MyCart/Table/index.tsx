import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'

import { TableDesktop } from './TableDesktop'
import { TableMobile } from './TableMobile'
import { EmptyCart } from '../../../components/EmptyCart'

export function Table() {
  // state da janela
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  const {cart} = useCart()

  // função que renderiza um componente de acordo com o tamanho da largura da janela
  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
    }
  }, [])

  if(cart.length === 0)
  return <EmptyCart title='Ops, Parace que você não adicionou nada, peça já!'/>

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
