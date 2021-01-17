import React from 'react';
import { NextPage } from 'next';

import { INITIAL} from '../store/store';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';

import { MainContainer } from '../styles/index.styles';

const Home: NextPage = () => {
  const { step } = useSelector<INITIAL, INITIAL>(state => state);
  
  return (
    <MainContainer>
      <Header/>
    </MainContainer>
  );
}

export default Home;