import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import axios from 'axios';
import { APP } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAssets, setCard, setStep } from '../../store/actions/actions';
import { Cliente } from '../SelectClient/SelectClient';

import { CardContainer } from './styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';
import card from '../../assets/img/card.jpg';

const CardData = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState(null);
  const [cardDateValide, setCardDateValide] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const [frontCard, setFrontCard] = useState('');
  const [backCard, setBackCard] = useState('');
  const [selfieCard, setSelfieCard] = useState('');

  const [dataCard, setDataCard] = useState([]); // This where the images card !!!

  const { client, url } = useSelector<APP, APP>(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get<Cliente>(`${url}api/client/${client}`).then(res => {
      setName(res.data.name);
    });
  }, []);

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString();
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }


  const onChangeFrontCard = async (e: ChangeEvent<HTMLInputElement>) => {
    if (Array.from(e.currentTarget.files).length === 1) {
      const file = Array.from(e.currentTarget.files)[0];
      setFrontCard(e.target.value);
      dataCard.push({
        title: 'Front Card',
        file: await getBase64(file)
      });
      setDataCard([...dataCard]);
    } else {
      e.preventDefault();
    }
  }

  const onChangeBackCard = async (e: ChangeEvent<HTMLInputElement>) => {
    if (Array.from(e.currentTarget.files).length === 1) {
      const file = Array.from(e.currentTarget.files)[0];
      setBackCard(e.target.value);
      dataCard.push({
        title: 'Back Card',
        file: await getBase64(file)
      });
      setDataCard([...dataCard]);
    } else {
      e.preventDefault();
    }
  }

  const onChangeSelfieCard = async (e: ChangeEvent<HTMLInputElement>) => {
    if (Array.from(e.currentTarget.files).length === 1) {
      const file = Array.from(e.currentTarget.files)[0];
      if (file.size < 2097152) {
        setSelfieCard(e.target.value);
        dataCard.push({
          title: 'Back Card',
          file: await getBase64(file)
        });
        setDataCard([...dataCard]);
      } else { }
    } else {
      e.preventDefault();
    }
  }

  const genereteSolicitation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const card = {
      number: cardNumber.toString(),
      cvc: cardCvc,
      validate: cardDateValide,
    }
    dispatch(setAssets(dataCard, 'SET_ASSETS'));
    dispatch(setCard(card, 'SET_CARD'));
    dispatch(setStep(4, 'SET_STEP'));
  }


  return (
    <CardContainer>
      <section>
        <img src={add} alt='Add' />
        <img src={box} alt='Simulation' />
        <h1>Solicitar Empréstimo</h1>
      </section>
      <form onSubmit={genereteSolicitation}>
        <article>
          <div>
            <label>Insira os dados do Cartão</label>
            <input type='text' required value={name} placeholder={name} />
            <div>
              <input type='number' required min='0' placeholder='000000000000' value={cardNumber} onChange={(e: FormEvent<HTMLInputElement>) => setCardNumber(e.currentTarget.value)} />
              <img src={card} />
            </div>
            <input type='date' required title='Date de Validade' value={cardDateValide} onChange={(e: FormEvent<HTMLInputElement>) => setCardDateValide(e.currentTarget.value)} />
            <input type='text' required placeholder='CVC' value={cardCvc} onChange={(e: FormEvent<HTMLInputElement>) => setCardCvc(e.currentTarget.value)} />
          </div>
          <div>
            <label>Faça o upload dos anexos do cartão:</label>
            <div style={{ border: (frontCard !== '') ? '2px dashed #228A95' : 2 }}>
              Cartão de Crédito (Frente)
              <label htmlFor='frontcardView'>Adicionar</label>
              <input value={frontCard} required type='file' accept='.jpg,.png' id='frontcardView' name='frontcardView' onChange={onChangeFrontCard} />
            </div>
            <div style={{ border: (backCard !== '') ? '2px dashed #228A95' : 2 }}>
              Cartão de Crédito (Verso)
              <label htmlFor='backcardView'>Adicionar</label>
              <input value={backCard} required type='file' accept='.jpg,.png' id='backcardView' name='backcardView' onChange={onChangeBackCard} />
            </div>
            <div style={{ border: (selfieCard !== '') ? '2px dashed #228A95' : 2 }}>
              Selfie com cartão de crédito
              <label htmlFor='selfieCard'>Adicionar</label>
              <input value={selfieCard} required type='file' accept='.jpg,.png' id='selfieCard' name='selfieCard' onChange={onChangeSelfieCard} />
            </div>
            <label>Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão e menores que 2MB de tamanho.</label>
          </div>
        </article>
        <button>Continuar</button>
      </form>
    </CardContainer>
  )
}

export default CardData;