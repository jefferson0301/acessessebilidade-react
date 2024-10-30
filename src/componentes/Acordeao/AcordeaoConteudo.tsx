import React from 'react'

interface PropsAcordeaoConteudo{
    children: React.ReactNode
}

const AcordeaoConteudo = ({children} : PropsAcordeaoConteudo ) => {
  return (
    <details className='acordeao__conteudo' >
        {children}
    </details>
  )
}

export default AcordeaoConteudo