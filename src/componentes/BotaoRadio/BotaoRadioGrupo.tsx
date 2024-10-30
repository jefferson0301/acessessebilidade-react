import React from "react"
import './BotaoRadio.css'

interface PropsBotaoRadioGrupo{
    children:  React.ReactNode
    legenda ?: string
    arialLabel: string
}

const BotaoRadioGrupo = ({children, legenda, arialLabel} : PropsBotaoRadioGrupo) => {
  return (
    <fieldset className="radio__grupo--campos" aria-label={arialLabel} tabIndex={0} > {/*tabIndex = 0 deixa o elemento navegavel pelo tab*/}
        {legenda && <legend className="radio__grupo--legenda" >{legenda}</legend> }
        <ul className="radio__grupo--campos" >{children}</ul>
    </fieldset>
  )
}

export default BotaoRadioGrupo