import React, { FormEvent, useEffect, useState } from 'react';

import { setUrl } from '../store/actions/actions';
import { APP, wrapper } from '../store/store';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../components/Header/Header';
import Input from 'react-input-mask';

import { RegisterContainer } from '../styles/registration.styles';

import add from '../assets/svg/add.svg';
import box from '../assets/svg/box.svg';

const Register = ({ url }) => {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [agencia, setAgencia] = useState('');
  const [bank, setBank] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountNumer, setAccountNumber] = useState('');
  const [message, setMessage] = useState('');

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${url}api/client`, {
      name,
      cpf,
      phone,
      bank: {
        label: bank,
        accountAgent: agencia,
        accountTypeLabel: accountType,
        accountNumber: accountNumer
      }
    }).then(res => {
      setName('');
      setCpf('');
      setPhone('');
      setAgencia('');
      setBank('');
      setAccountType('');
      setAccountNumber('');
      setMessage('Cliente cadastrado com sucesso !');
    }).catch(res => {
      setMessage('Cliente já está cadastrado !')
    });
  } 

  return (
    <RegisterContainer>
      <Header />
      <main>
        <header>
          <img src={add} alt='Add' />
          <img src={box} alt='Simulation' />
          <h1>Cadastrar Cliente</h1>
        </header>
        <form onSubmit={onRegister}>
          <div>
            <label htmlFor='name'>Nome: </label>
            <input required type='text' name='name' value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='cpf'>CPF: </label>
            <Input required type='text' name='cpf' value={cpf} onChange={e => setCpf(e.target.value)} mask='999.999.999-99'/>
          </div>
          <div>
            <label htmlFor='phone'>Telefone: </label>
            <Input required type='text' name='phone' value={phone} onChange={e => setPhone(e.target.value)} mask='(99) 9 9999-9999'/>
          </div>
          <div>
            <label htmlFor='bank'>Banco: </label>
            <input required type='text' name='bank' value={bank} onChange={e => setBank(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='agencia'>Agência: </label>
            <input required type='text' name='agencia' value={agencia} onChange={e => setAgencia(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='accountype'>Tipo de conta: </label>
            <input required type='text' name='accountype' value={accountType} onChange={e => setAccountType(e.target.value)}/>
          </div>
          <div>
            <label>Número da conta: </label>
            <input required type='text' value={accountNumer} onChange={e => setAccountNumber(e.target.value)}/>
          </div>
          <button>Cadastrar</button>
          <span>{message}</span>
        </form>
      </main>
    </RegisterContainer>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(setUrl(process.env.URL_API, 'SET_URL'));
    return {
      props: {
        url: process.env.URL_API,
      }
    }
  }
);


export default Register;