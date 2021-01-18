import React, { useState, FormEvent, useEffect } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { SimulTaxasContainer } from './styles';

import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';
import { APP } from '../../store/store';

interface Table {
  _id: string;
  name: string;
  installments: [
    {
      installments: number;
      installmentInterest: number;
      comission: number;
    }
  ]
}
interface TableSingle {
  _id: string;
  name: string;
  installments: [
    {
      _id: string,
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
  });

  const { url } = useSelector<APP, APP>(state => state);

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
        axios.get<Table[]>(`${url}/api/model`).then(res => {
          setModels([...res.data]);
          setGenerate(true);
        });
      }
    }
  };

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
                value: 0
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
          <article>
            {
              models.map((table: TableSingle) => (
                <div key={table._id.toString()}>
                  <div>
                    <input type='radio' name='selection' onChange={e => {
                      setSelectedInstallment('');
                      setTableSelected(table._id);
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
                        (selectedInstallment == installment._id && tableSelected == table._id)
                          ?
                          <tr style={{ background: '#EFDF4B56' }} key={installment._id} onClick={e => {
                            if (tableSelected == table._id) {
                              setSelectedInstallment(installment._id);
                              setDetailSelected({
                                installments: installment.installments,
                                value: price + (price * (installment.comission / 100)),
                              });
                            }
                          }}>
                            <td>{installment.installments}</td>
                            <td>{installment.installmentInterest} %</td>
                            <td>{(price / installment.installments).toFixed(2)}</td>
                            <td>{price + (price * (installment.comission / 100))}</td>
                            <td>{installment.comission} %</td>
                          </tr>
                          :
                          <tr key={installment._id} onClick={e => {
                            if (tableSelected == table._id) {
                              setSelectedInstallment(installment._id);
                              setDetailSelected({
                                installments: installment.installments,
                                value: price + (price * (installment.comission / 100)),
                              });
                            }
                          }
                          }>
                            <td>{installment.installments}</td>
                            <td>{installment.installmentInterest} %</td>
                            <td>{(price / installment.installments).toFixed(2)}</td>
                            <td>{price + (price * (installment.comission / 100))}</td>
                            <td>{installment.comission} %</td>
                          </tr>
                      ))
                    }
                  </table>
                </div>
              ))
            }
          </article>
          <footer>
          </footer>
        </>
      ) : (
          <></>
        )}
    </SimulTaxasContainer>
  );
};



export default SimulTaxas;