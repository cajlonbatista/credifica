import React from 'react';
import { InferGetStaticPropsType } from 'next';

import { APP, wrapper } from '../store/store';
import { setUrl } from '../store/actions/actions';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import Steps from '../components/Steps/Steps';

import { MainContainer } from '../styles/index.styles';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { step } = useSelector<APP, APP>(state => state);

  return (
    <MainContainer>
      <Header />
      <Steps step={step} />
    </MainContainer>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }) => {       
    store.dispatch(setUrl(process.env.URL_API, 'SET_URL'));
  }
);

export default Home;