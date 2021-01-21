interface INSTALLMENT{
  id: string,
  installments: number,
  comission: number,
}

export const getValueInstallment = (price: number, installment: INSTALLMENT) => {
  const value = ((price / installment.installments) + (price / installment.installments * (installment.comission / 100))).toFixed(2).toString();
  var newValue = '';
  
  for (const n of value ) {
    if (n == '.') {
      newValue += ',';
    } else {
      newValue += n;
    }
  }

  return newValue;
}

export const getValueComission = (price: number, installment: INSTALLMENT) => {
  const value = (price * (installment.comission / 100)).toFixed(2).toString();
  var newValue = '';

  for (const n of value) {
    if (n == '.') {
      newValue += ',';
    } else {
      newValue += n;
    }
  }

  return newValue;
} 

export const getValueTotalMoreComission = (price: number, installment: INSTALLMENT) => {
  const value = (price + (price * (installment.comission / 100))).toFixed(2).toString();
  var newValue = '';

  for (const n of value) {
    if (n == '.') {
      newValue += ',';
    } else {
      newValue += n;
    }
  }

  return newValue;
}
