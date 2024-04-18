//criando o context do carrinho
import { createContext, useState, ReactNode  } from 'react'

// useNavigate para navegação
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { CustomerData } from '../interfaces/CustomerDate';
import { SnackData } from '../interfaces/SnackData';

import { snackEmoji } from '../helpers/snackEmoji';

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]

  //chamando a função que adiciona produto no carrinho
  addSnackIntoCart: (snack: SnackData) => void

  //chamando a função que remove produto no carrinho
  removeSnackFromCart: ( snack: Snack ) => void

  //chamando a função que incrementa a quantidade de produto no carrinho
  snackCartIncrement: (snack: Snack) => void

  //chamando a função que incrementa a quantidade de produto no carrinho
  snackCartDecrement: (snack: Snack) => void

  //chamando a função que confirma o Pedido
  confirmOrder: () => void

  //chamando a função de pagamento de pedido
  payOrder: (customer: CustomerData) => void

}

interface CartProviderProps {
  children: ReactNode
}

//Função de Contexto
export const CartContext = createContext({} as CartContextProps)

// Função que prover
export function CartProvider({children}: CartProviderProps) {
  //criando o hook para navegação
  const navigate = useNavigate()

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

    //criando a função que remove produto no carrinho
    function removeSnackFromCart(snack: Snack) {
      const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

      setCart(newCart)
    }

    function upDateSnackQuantity(snack: Snack, newQuantity: number) {
      if(newQuantity <= 0) return

      const snackExistentInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

      if(!snackExistentInCart) return

      const newCart = cart.map((item) => {
        if(item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack){
          return {
            ...item,
            quantity: newQuantity,
            subtotal: item.price * newQuantity,
          }
        }
        return item
      })
      setCart(newCart)
    }

    //criando a função que icrementa produto no carrinho
    function snackCartIncrement(snack: Snack) {
      upDateSnackQuantity(snack, snack.quantity + 1)
    }

    //criando a função que decrementa produto no carrinho
    function snackCartDecrement(snack: Snack) {
      upDateSnackQuantity(snack, snack.quantity - 1)
    }

    //criando a função que confirma o pedido
    function confirmOrder(){
      // chamando o nabigate e informando a rota
      navigate('/payment')
    }

    //criando a função
    function payOrder(customer: CustomerData){
      console.log('payOrder', cart, customer)

      return
    }

    return (
      <CartContext.Provider value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder,
      }}>
        {children}
      </CartContext.Provider>
    )
}
