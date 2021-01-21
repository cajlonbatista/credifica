import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { APP } from '../../store/store';

import axios from 'axios';

import { ConcluedContainer } from './styles';

import wallet from '../../assets/svg/wallet.svg';
import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';
import { getValueInstallment, getValueTotalMoreComission } from '../../utils/functions/finances';

const confirm = (
  <svg xmlns="http://www.w3.org/2000/svg" width="43.953" height="33.658" viewBox="0 0 43.953 33.658">
    <path fill='#' d="M192.121,177.539l-3.592-3.694a.772.772,0,0,0-.572-.245.741.741,0,0,0-.572.245l-24.9,25.086-9.063-9.063a.789.789,0,0,0-1.143,0l-3.633,3.633a.813.813,0,0,0,0,1.163l11.43,11.43a3.615,3.615,0,0,0,2.388,1.163,3.788,3.788,0,0,0,2.368-1.123h.02l27.29-27.433a.873.873,0,0,0-.02-1.163Z" transform="translate(-148.4 -173.6)" />
  </svg>
);

const Conclued = () => {
  const [loading, setLoading] = useState(true);
  const [solicitation, setSolicitation] = useState({
    _id: '',
    clientId: '',
    cardDetails: {
      number: '',
      validate: '',
    },
    desiredValue: 0,
    tableId: '',
    installmentId: '',
    installmentInterest: 0
  });
  const [user, setUser] = useState({
    name: '',
    phone: '',
  });
  const [installment, setInstallment] = useState({
    id: '',
    installments: 0,
    comission: 0,
  });

  const { url, currentSolicitation } = useSelector<APP, APP>(state => {
    return state;
  });

  useEffect(() => {
    if (loading === true) {
      axios.get(`${url}api/solicitation/6008aef027fe6c2154194656`).then(async res => {
        setSolicitation(res.data);
        await axios.get(`${url}api/client/${res.data.clientId}`).then(res => {
          setUser(res.data);
        });

        await axios.get(`api/tables`).then(res => {
          var tables = res.data;
          for (const current of tables) {
            if (current.id === solicitation.tableId) {
              for (const installment of current.installments) {
                if (installment.id === solicitation.installmentId) {
                  setInstallment(installment);
                  setLoading(false);
                }
              }
            }
          }
        });
      })
    }
  });
  if (loading === true) {
    return <div></div>
  } else {
    return (
      <ConcluedContainer>
        <header>
          <img src={add} alt='Add' />
          <img src={box} alt='Simulation' />
          <h1>Solicitar Empréstimo</h1>
        </header>
        <section>
          <h1>Solicitação Realizada com Sucesso</h1>
          <div>
            <p>Resumo da Solicitação </p>
          </div>
          <article>
            <div>
              <div>
                <h3>{user.name}</h3>
                <div>
                  <h3>{user.phone}</h3>
                  {confirm}
                </div>
              </div>
              <div>
                <div>
                  <img src={wallet} alt='Wallet' />
                  <h3>{solicitation.cardDetails.number}</h3>
                </div>
                <div>
                  <strong>VISA</strong>
                  <h3>{new Date(solicitation.cardDetails.validate).toLocaleDateString()}</h3>
                </div>
                {confirm}
              </div>
              <div>
                <h2>Valor desejado: </h2>
                <div>
                  <h4>R$ {solicitation.desiredValue}</h4>
                  {confirm}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2>Taxa de Juros:</h2>
                <div>
                  <h1>{solicitation.installmentInterest} %</h1>
                  {confirm}
                </div>
              </div>
              <div>
                <h2>Parcelas:</h2>
                <div>
                  <h1>{installment.installments}</h1>
                  {confirm}
                </div>
              </div>
              <div>
                <h2>Valor das Parcelas: </h2>
                <div>
                  <h4>R$ {getValueInstallment(solicitation.desiredValue, installment)}</h4>
                  {confirm}
                </div>
              </div>
            </div>
          </article>
          <footer>
            <h2>Valor Total do Empréstimo: </h2>
            <h4>R$ {getValueTotalMoreComission(solicitation.desiredValue, installment)}</h4>
          </footer>
          <Link href={`/solicitation/${solicitation._id}`}>Detalhe da solicitação</Link>
          <span>O CrediFica avaliará a sua solicitação</span>
        </section>
      </ConcluedContainer>
    )
  }
};

export default Conclued;
