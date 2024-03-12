//criando o context do carrinho
import { createContext, useState, useEffect, ReactNode  } from 'react'
import { toast } from 'react-toastify';

import { SnackData } from '../interfaces/SnackData';

import { snackEmoji } from '../helpers/snackEmoji';

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]

  //chamando a função que adiciona produto no carrinho
  addSnackIntoCart: (snack: SnackData) => void

  //chamando a função que remove produto no carrinho
  //removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void

  //chamando a função que atualiza o carrinho
  //updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

//Função de Contexto
export const CartContext = createContext({} as CartContextProps)

// Função que prover
export function CartProvider({children}: CartProviderProps) {
  //criando o array carrinho
  const [cart, setCart] = useState<Snack[]>([])

    //criando a função que adiciona produto no carrinho
    function addSnackIntoCart(snack: SnackData): void {
      //buscar
      const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

      //atualizar
      if (snackExistentInCart) {
        const newCart = cart.map((item) => {
          if(item.id === snack.id){
            const quantity = item.quantity + 1
            const subtotal = item.price * quantity

            return { ...item, quantity, subtotal}
          }

          return item
        })

        console.log(`newCart de atualização`, newCart)
        toast.success(`Outro ${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!` )
        setCart(newCart)

        return
      }

      //adicionar
      const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
      //método push de um array
      const newCart = [...cart, newSnack]

      console.log(`newCart de adição`, newCart)
      toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!` )
      setCart(newCart)
    }

    return (
      <CartContext.Provider value={{cart, addSnackIntoCart}}>
        {children}
      </CartContext.Provider>
    )
}
