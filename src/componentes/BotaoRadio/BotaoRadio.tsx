import React from 'react'

interface PropsBotaoRadio {
    id: string
    nome: string
    valor: string
    selecionado: boolean
    aoMudar ?: (evento: React.ChangeEvent<HTMLInputElement>) => void
    textoLegenda: string
}

const BotaoRadio = ({id, nome, valor, selecionado, aoMudar, textoLegenda}  : PropsBotaoRadio) => {
  return (
    <li>
        <label htmlFor={id} className="botao__radio--legenda" >
            <input 
                type="radio" 
                id={id}
                name={nome}
                checked={selecionado}
                value={valor}
                onChange={aoMudar}
            />
            <span>{textoLegenda}</span>
        </label>
    </li>
  )
}

export default BotaoRadio