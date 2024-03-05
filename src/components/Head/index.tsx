//criando a interface para as propriedades de title e description do Head
interface HeadProps{
  title: string
  //o ? significa que é opcional
  description?: string
}

export function Head({title, description = ''}: HeadProps){
  //pegando o title
  document.title = `Food Commerce | ${title}`
  //pegando a description, o ? é o if
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
