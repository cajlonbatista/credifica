import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import axios from 'axios';
import { formatValue } from '../utils/functions/finances';

import Header from '../components/Header/Header';

import { MainContainer } from '../styles/index.styles';

import alert from '../assets/svg/alert.svg';
import checked from '../assets/svg/checked.svg';

const Main = ({ solicitations }) => {
  const router = useRouter();
  return (
    <MainContainer>
      <Header />
      <main>
        {
          solicitations.map(solicitation => (
            <div onClick={e => router.push(`/solicitation/${solicitation._id}`)}>
              <h1>R$ {formatValue(solicitation.desiredValue)}</h1>
              <h1>Cliente: {solicitation.clientId}</h1>
              <h1>{new Date(solicitation.createdAt).toLocaleDateString()}</h1>
              {
                (solicitation.status === 'Aguardando')
                  ?
                  <>
                    <button style={{ background: '#EF9C4B' }}>
                      <img src={alert} alt='Waiting' />
                      Aguardando
                    </button>
                  </>
                  :
                  (solicitation.status == 'Aprovada')
                    ?
                    <button style={{ background: '#228A95' }}>
                      <img src={checked} alt='Checked' />
                      {solicitation.status}
                    </button>
                    :
                    <button style={{ background: '#BC3434' }}>
                      <img src={alert} alt='Alert' />
                      {solicitation.status}
                    </button>
              }
            </div>
          ))
        }
      </main>
    </MainContainer>
  );
}

export default Main;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${process.env.URL_API}api/solicitations`);
  return {
    props: {
      solicitations: response.data,
    },
    revalidate: 1,
  }
}