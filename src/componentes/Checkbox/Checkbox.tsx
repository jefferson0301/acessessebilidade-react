import React from 'react'
import './Checkbox.css'

interface PropsCheckbox extends React.HTMLProps<HTMLInputElement> {
    legenda: string
    id: string
    nome: string
    selecionado: boolean
    aoSelecionado: () => void
     
}

const Checkbox = ({legenda, id, nome, selecionado, aoSelecionado, ...rest} : PropsCheckbox) => {
  return (
    <label htmlFor={id} className='checkbox__legenda' >
        <input 
            type="checkbox" 
            id={id} 
            name={nome} 
            checked={selecionado} 
            onChange={aoSelecionado} 
            {...rest}
        />
        <span>{legenda}</span>
    </label>
  )
}

export default Checkbox