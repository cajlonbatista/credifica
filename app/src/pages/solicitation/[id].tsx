import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';
import { CircleLoading } from 'react-loadingg';
import { Table } from '../../components/SimulTaxas/SimulTaxas';
import { getValueInstallment } from '../../utils/functions/finances';

import Header from '../../components/Header/Header';
import { Dialog } from '@material-ui/core';

import { SolicitationView } from '../../styles/solicitation.[id].styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';
import file from '../../assets/svg/file.svg';
import card from '../../assets/svg/card.svg';
import alert from '../../assets/svg/alert.svg';
import checked from '../../assets/svg/checked.svg';


const Solicitation = ({ solicitation, client, url }) => {
  const { isFallback, query, push } = useRouter();

  const { id } = query;



  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  const [currentInstallment, setCurrentInstallment] = useState({
    id: '',
    installments: 0,
    installmentInterest: 0,
    comission: 0
  });
  const [currentTable, setCurrentTable] = useState({
    name: '',
  });

  const offDialogOne = () => {
    setImage1(false);
  }
  const offDialogTwo = () => {
    setImage2(false);
  }
  const offDialogTree = () => {
    setImage3(false);
  }

  const comprovanteStyles = {
    width: '100%',
    maxWidth: 600,
    display: 'block',
    margin: '0 auto',
  }

  const approveSolicitation = () => {
    axios.put(`${url}api/solicitation/${id}`, {
      status: 'Aprovada',
    }).then(res => {
      push('/');
    }).catch(err => console.log(err));
  }
  const failSolicitation = () => {
    axios.put(`${url}api/solicitation/${id}`, {
      status: 'Reprovada',
    }).then(res => {
      push('/');
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    axios.get<Table[]>('/api/tables').then(res => {
      var tables = res.data;
      for (const current of tables) {
        if (current.id === solicitation.tableId) {
          setCurrentTable(current);
          for (const installment of current.installments) {
            if (installment.id === solicitation.installmentId) {
              setCurrentInstallment(installment);
            }
          }
        }
      }
    }).catch(err => console.log(err))
  }, []);

  if (isFallback) {
    return (
      <div>
        <Header />
        <CircleLoading />
      </div>
    );
  } else {
    const { desiredValue, comissionValue, assets } = solicitation;
    return (
      <>
        <Header />

        <SolicitationView>
          <header>
            <img src={add} alt='Add' />
            <img src={box} alt='Simulation' />
            <h1>Detalhe da Solicitação</h1>
          </header>
          <section>
            <article>
              <header>
                <h1>Solicitação gerada pelo <strong>Sistema Credifica</strong></h1>
              </header>
              <div>
                <div>
                  <h2>Valor Total</h2>
                  <h3>R$ {desiredValue + comissionValue}</h3>
                </div>
                <div>
                  <h2>Valor a Depositar</h2>
                  <h3>R$ {desiredValue}</h3>
                </div>
                <div>
                  <h2>Frente do Cartão</h2>
                  <Dialog onClick={offDialogOne} open={image1}>
                    <img src={assets[0].file} style={comprovanteStyles} />
                  </Dialog>
                  <img src={file} alt={assets[0].title} />
                  <span onClick={e => setImage1(true)}>Ver comprovante</span>
                </div>
                <div>
                  <h2>Verso do Cartão</h2>
                  <Dialog onClick={offDialogTwo} open={image2}>
                    <img src={assets[1].file} style={comprovanteStyles} />
                  </Dialog>
                  <img src={file} alt={assets[1].title} />
                  <span onClick={e => setImage2(true)}>Ver comprovante</span>
                </div>
                <div>
                  <h2>Selfie com cartão</h2>
                  <Dialog onClick={offDialogTree} open={image3}>
                    <img src={assets[2].file} style={comprovanteStyles} alt={assets[2].title} />
                  </Dialog>
                  <img src={file} />
                  <span onClick={e => setImage3(true)}>Ver comprovante</span>
                </div>
              </div>
            </article>
            <section>
              <header>
                <h1>Fluxo de Solicitação: <strong>{(solicitation.contract == 'MANU') ? 'Manual' : 'Automático'}</strong></h1>
              </header>
              <article>
                <p>Modalidade:</p>
                <div>
                  <h2>Cartão de Crédito</h2>
                  <img src={card} />
                </div>
                <h1>Número do Cartão: {solicitation.cardDetails.number}</h1>
                <div>
                  <h1>Validade: {solicitation.cardDetails.validate}</h1>
                  <h1>CVC: {solicitation.cardDetails.cvc}</h1>
                </div>
                <h1>{currentInstallment.installments} parcela(s) de <strong>R$ {getValueInstallment(solicitation.desiredValue, currentInstallment)}</strong></h1>
                <h1>Tabela: {currentTable.name}</h1>
              </article>
              <section>
                <p>Informações do Cliente:</p>
                <h1>Nome: {client.name}</h1>
                <h1>CPF: {client.cpf}</h1>
                <h1>Agência: {client.bank.accountAgent}</h1>
                <h1>Banco: {client.bank.label}</h1>
                <h1>Tipo de Conta: {client.bank.accountTypeLabel}</h1>
                <h1>Conta: {client.bank.accountNumber}</h1>
              </section>
              <footer>
                <p>Informações Gerais</p>
                <h1>Data: {new Date(solicitation.createdAt).toLocaleDateString()}</h1>
                {
                  (solicitation.status === 'Aguardando')
                    ?
                    <>
                      <button style={{ background: '#EF9C4B', cursor: 'default', outline: 'none' }}>
                        <img src={alert} alt='Waiting' />
                      Aguardando
                    </button>
                      <div>
                        <button onClick={approveSolicitation} style={{ background: '#228A95' }}>
                          <img src={checked} /> Pré Aprovar
                      </button>
                        <button onClick={failSolicitation} style={{ background: '#BC3434' }}>
                          <img src={alert} /> Reprovar
                      </button>
                      </div>
                    </>
                    :
                    (solicitation.status == 'Aprovada')
                      ?
                      <button style={{ background: '#228A95', cursor: 'default', outline: 'none' }}>
                        <img src={checked} alt='Checked' />
                        {solicitation.status}
                      </button>
                      :
                      <button style={{ background: '#BC3434', cursor: 'default', outline: 'none' }}>
                        <img src={alert} alt='Alert' />
                        {solicitation.status}
                      </button>
                }
              </footer>
            </section>
          </section>
        </SolicitationView>
      </>
    );
  }
};



export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const response = await axios.get(`${process.env.URL_API}api/solicitation`);
  const solicitations = response.data;
  if (response.data.length != 0) {
    for (const solicitation of solicitations) {
      paths.push({ params: solicitation });
    }
  } else {
    
  }
  
  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const response = await axios.get(`${process.env.URL_API}api/solicitation/${params.id}`);
  const solicitation = response.data;

  const client = await axios.get(`${process.env.URL_API}api/client/${solicitation.clientId}`);

  return {
    props: {
      solicitation,
      client: client.data,
      url: process.env.URL_API
    },
    revalidate: 1
  }
}

export default Solicitation;