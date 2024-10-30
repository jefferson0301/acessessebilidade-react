import React from 'react'
import Tipografia from '../Tipografia'
import { IconeSetaBaixo, IconeSetaCima } from '../Icones'

interface PropsAcordeaoTitulo{
    titulo: string
    estaAberto: boolean
    id: string 
    alternarVisibilidade: () => void
}

const AcordeaoTitulo = ({titulo, estaAberto, id, alternarVisibilidade} : PropsAcordeaoTitulo ) => {
  return (
    <summary 
        role='button'
        className='acordeao__titulo' 
        aria-expanded={estaAberto}
        aria-controls={id}
        onClick={alternarVisibilidade}
    >
        <Tipografia elemento='h2' variante='h3' cor='cinza' >
            {titulo}
        </Tipografia>
        <span>{estaAberto ? <IconeSetaCima/> : <IconeSetaBaixo/>}</span>
    </summary>
  )
}

export default AcordeaoTitulo