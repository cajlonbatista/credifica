import React from 'react';

import SelectClient from '../SelectClient/SelectClient';
import SimulTaxas from '../SimulTaxas/SimulTaxas';
import DataReview from '../DataReview/DataReview';
import Conclued from '../Conclude/Conclued';
import CardData from '../CardData/CardData';
import PayType from '../PayType/PayType';


type Step = {
  step: Number;
}

const Steps = ({ step }: Step) => {
  if (step === 1) {
    return <SimulTaxas />
  } else if (step === 2) {
    return <SelectClient />
  } else if (step === 3) {
    return <CardData />
  } else if (step === 4) {
    return <PayType />
  } else if (step === 5) {
    return <DataReview />
  } else if (step === 6) {
    return <Conclued />
  }
}

export default Steps;