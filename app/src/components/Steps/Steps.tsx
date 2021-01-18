import React from 'react';
import SimulTaxas from '../SimulTaxas/SimulTaxas';

type Step = {
  step: Number;
}

const Steps = ({ step }: Step) => {
  if (step === 1) {
    return <SimulTaxas />
  }
}

export default Steps;