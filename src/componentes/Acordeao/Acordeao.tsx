import React from 'react'
import "./Acordeao.css"

interface PropsAcordeao {
    children: React.ReactNode
}

const Acordeao = ({children} : PropsAcordeao) => {
  return (
    <div className='acordeao__container' >
        {children}
    </div>
  )
}

export default Acordeao