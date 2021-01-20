import React from 'react';

import { useDispatch } from 'react-redux';
import { setPayType, setStep } from '../../store/actions/actions';

import { PayTypeContainer } from './styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';

const PayType = () => {
  const dispatch = useDispatch();

  const goPayType = (pay: string) => {
    dispatch(setPayType(pay, 'SET_PAYTYPE'));
    dispatch(setStep(5, 'SET_STEP'));
  }

  return (
    <PayTypeContainer>
      <section>
        <img src={add} alt='Add' />
        <img src={box} alt='Simulation' />
        <h1>Solicitar Empréstimo</h1>
      </section>
      <article>
        <h1>Escolha a modalidade</h1>
        <button onClick={() => goPayType('CARD_CREDIT')}>Cartão de Crédito</button>
        <span>Ou</span>
        <div>
          {
            /* This button in div is disable */
          }
          <button>Crédito Consignado</button>
        </div>
        <span>Em breve</span>
      </article>
    </PayTypeContainer>
  );
}

export default PayType;