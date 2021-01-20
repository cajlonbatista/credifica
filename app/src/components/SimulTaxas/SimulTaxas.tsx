import React, { useState, FormEvent } from 'react';

import axios from 'axios';

import { setDetails, setStep, setValue } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';

import { SimulTaxasContainer, TableContainer } from './styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';

export interface Table {
  id: string;
  name: string;
  installments: [
    {
      id: string,
      installments: number;
      installmentInterest: number;
      comission: number;
    }
  ]
}
export interface TableSingle {
  id: string;
  name: string;
  installments: [
    {
      id: string,
      installments: number;
      installmentInterest: number;
      comission: number;
    }
  ]
}

const SimulTaxas = () => {
  const [price, setPrice] = useState(0);

  const [models, setModels] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [message, setMessage] = useState('');
  const [tableSelected, setTableSelected] = useState('');
  const [selectedInstallment, setSelectedInstallment] = useState('');
  const [detailSelected, setDetailSelected] = useState({
    installments: 0,
    value: 0,
    name: '',
  });

  const dispatch = useDispatch();


  const onGenerate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    if (price < 300 || price > 10000) {
      setMessage(
        'O valor não pode ser menor que R$ 300,00 ou maior que R$ 10.000,00 !'
      );
    } else {
      if (price === 0) {
        setMessage('Digite um valor !');
      } else {
        axios.get<Table[]>(`api/tables`).then(res => {
          setModels([...res.data]);
          setGenerate(true);
          dispatch(setValue(price, 'SET_VALUE'));
        });
      }
    }
  };

  const advancedStep = () => {
    if (tableSelected !== '' && selectedInstallment !== '') {
      dispatch(setDetails({
        id: tableSelected,
        installmentId: selectedInstallment,
      }, 'SET_DETAILS'));

      dispatch(setStep(2, 'SET_STEP'));
    }
  }

  return (
    <SimulTaxasContainer>
      <section>
        <img src={add} alt='Add' />
        <img src={box} alt='Simulation' />
        <h1>Simulação de Taxas</h1>
      </section>
      <form onSubmit={onGenerate}>
        <div>
          <h1>Valor Desejado</h1>
          <input
            type='number'
            required
            value={price}
            min='0'
            max='10000'
            onChange={e => {
              setGenerate(false);
              setSelectedInstallment('');
              setDetailSelected({
                installments: 0,
                value: 0,
                name: ''
              });
              if (e.target.value !== null) {
                setPrice(parseInt(e.target.value));
              }
            }}
            placeholder='R$ 0,00'
          />
        </div>
        <span>{message}</span>
        <button>Calcular</button>
      </form>
      {generate === true ? (
        <>
          <TableContainer>
            {
              models.map((table: TableSingle) => (
                <div key={table.id.toString()}>
                  <div>
                    <input type='radio' name='selection' onChange={e => {
                      setSelectedInstallment('');
                      setTableSelected(table.id);
                      setDetailSelected({
                        installments: 0,
                        value: 0,
                        name: table.name,
                      });
                    }} />
                  </div>
                  <table>
                    <th colSpan={5}>
                      {table.name}
                    </th>
                    <tbody>
                      <th>Parcela</th>
                      <th>Juros da Parcela</th>
                      <th>Valor da Parcela</th>
                      <th>Valor Total</th>
                      <th>Comissão Parceiro</th>
                    </tbody>
                    {
                      table.installments.map(installment => (
                        (selectedInstallment == installment.id && tableSelected == table.id)
                          ?
                          <tr style={{ background: '#EFDF4B56' }} key={installment.id} onClick={e => {
                            if (tableSelected == table.id) {
                              setSelectedInstallment(installment.id);
                              setDetailSelected({
                                installments: installment.installments,
                                value: price + (price * (installment.comission / 100)),
                                name: table.name,
                              });
                            }
                          }}>
                            <td>{installment.installments}</td>
                            <td>{installment.installmentInterest} %</td>
                            <td>{((price / installment.installments) + (price / installment.installments * (installment.comission / 100))).toFixed(2)}</td>
                            <td>{(price + (price * (installment.comission / 100))).toFixed(2)}</td>
                            <td>{(price * (installment.comission / 100)).toFixed(2)}</td>
                          </tr>
                          :
                          <tr key={installment.id} onClick={e => {
                            if (tableSelected == table.id) {
                              setSelectedInstallment(installment.id);
                              setDetailSelected({
                                installments: installment.installments,
                                value: price + (price * (installment.comission / 100)),
                                name: table.name,
                              });
                            }
                          }
                          }>
                            <td>{installment.installments}</td>
                            <td>{installment.installmentInterest} %</td>
                            <td>{((price / installment.installments) + (price / installment.installments * (installment.comission / 100))).toFixed(2)}</td>
                            <td>{(price + (price * (installment.comission / 100))).toFixed(2)}</td>
                            <td>{(price * (installment.comission / 100)).toFixed(2)}</td>
                          </tr>
                      ))
                    }
                  </table>
                </div>
              ))
            }
          </TableContainer>
          <footer>
            <h1>Nome da Tabela: {detailSelected.name}</h1>
            <h1>Parcelas: {detailSelected.installments}</h1>
            <h1>Valor da Parcela: R$ {detailSelected.value}</h1>
            <button onClick={advancedStep}>Avançar</button>
          </footer>
        </>
      ) : (
          <></>
        )}
    </SimulTaxasContainer>
  );
};

export default SimulTaxas;