import React from 'react';

import { SimulTaxasContainer } from './styles';

import add from '../assets/svg/add.svg';
import box from '../assets/svg/box.svg';

const SimulTaxas: React.FC = () => {
  return (
    <SimulTaxasContainer>
      <section>
        <img src={add} alt='Add' />
        <img src={box} alt="Simulation" />
        <h1>Simulação de Taxas</h1>
      </section>
      <section>
        <h1>Valor Desejado</h1>
        <div>
          <input type='text' placeholder='R$ 0,00'/>
          <button>Calcular</button>
        </div>
        <span>{}</span>
      </section>
      
      </SimulTaxasContainer>
  )
}

export default SimulTaxas;