import React from 'react';

import { useSelector } from 'react-redux';
import { APP } from '../../store/store';

import { ConcluedContainer } from './styles';

const Conclued = () => {
  const { url, value, table } = useSelector<APP, APP>(state => {
    console.log(state.contract);
    return state;
  });
  return (
    <ConcluedContainer>

    </ConcluedContainer>
  )
};

export default Conclued;