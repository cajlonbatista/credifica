import React, { FormEvent, useState } from 'react';

import axios from 'axios';
import { APP } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setClient, setStep } from '../../store/actions/actions';

import Input from 'react-input-mask';

import { SelectContainer } from './styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';

export interface Cliente{
  name: string,
  cpf: string,
  phone: string,
  bank: {
    label: string,
    accountTypeLabel: string,
    accountNumber: string,
  }
}

const SelectClient = () => {
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('');
  const [clientData, setDataCliente] = useState({
    name: '',
    cpf: '',
    phone: '',
    bank: {
      label: '',
      accountTypeLabel: '',
      accountNumber: '',
    }
  });

  const dispatch = useDispatch();

  const { url } = useSelector<APP, APP>(state => state);

  const onSearchClient = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    axios.get<Cliente>(`${url}api/client/${cpf}`).then(res => {
      if (res.data !== null) {
        setMessage('');
        setDataCliente(res.data);
      } else {
        setMessage('Cliente não foi encontrado');
        setDataCliente({
          name: '',
          cpf: '',
          phone: '',
          bank: {
            label: '',
            accountTypeLabel: '',
            accountNumber: ''
          }
        });
      }
    }).catch(err => {
      console.log(err.message);      
    })
  }

  const createSolicitation = () => {
    dispatch(setClient(clientData.cpf, 'SET_CLIENT'));
    dispatch(setStep(3, 'SET_STEP'));
  }

  return (
    <SelectContainer>
      <section>
        <img src={add} alt='Add' />
        <img src={box} alt='Simulation' />
        <h1>Solicitar Empréstimo</h1>
      </section>
      <form onSubmit={onSearchClient}>
        <h1>Busque o cliente</h1>
        <div>
          <Input mask='999.999.999-99' type='text' autoFocus value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <button>Buscar</button>
        </div>
        <span>{message}</span>
      </form>
      {
        (clientData.name !== '')
        ?
          <article>
            <h1>Cliente encontrado: </h1>
            <h4>{clientData.cpf}</h4>
            <p>{clientData.name}</p>
            <button onClick={createSolicitation}>Solicitar</button>
          </article>
          :
          <>
          </>
      }
    </SelectContainer>
  );
}

export default SelectClient;