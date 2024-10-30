import Checkbox from "@/componentes/Checkbox/Checkbox";
import { useState } from "react";

const Garantia = () => {
  
  const [selecionado, setSelecionado] = useState(false)

  return (
    <>
    <Checkbox
      id="checkbox-quantidade"
      nome="selecionar-quantidade"
      selecionado={selecionado}
      aoSelecionado={() => setSelecionado((prev) => !prev)}
      legenda="Quero seguro extra por 12 meses"
    />
    <Checkbox
      id="checkbox-quantidade2"
      nome="selecionar-quantidade2"
      selecionado={ !selecionado }
      aoSelecionado={() => {  setSelecionado((prev) => !prev)}}
      legenda="Quero seguro extra por 24 meses"
    />
    
    </>
  );
};

export default Garantia;
