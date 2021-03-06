import React, { FormEvent, useEffect, useState } from 'react';

import axios from 'axios';
import { APP } from '../../store/store';
import { Table } from '../SimulTaxas/SimulTaxas';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSolicitation, setStep, setTypeContract } from '../../store/actions/actions';
import { getValueComission, getValueInstallment, getValueTotalMoreComission } from '../../utils/functions/finances';

import { Spin } from 'antd';

import { DataReviewContainer } from './styles';

import confirm from '../../assets/svg/confirm.svg';
import add from '../../assets/svg/add.svg';
import box from '../../assets/svg/box.svg';

const DataReview = () => {
  const [loading, setLoading] = useState(false);
  const [btnAutoStyles, setBtnAutoStyles] = useState({
    color: '#FFF',
    background: '#228A95'
  });
  const [btnManuStyles, setBtnManuStyles] = useState({
    color: '#228A95',
    background: '#FFF'
  });
  const [currentTable, setCurrentTable] = useState({
    id: '',
    name: '',
    installments: [],
  });
  const [currentInstallment, setCurrentInstallment] = useState({
    id: '',
    installments: 0,
    installmentInterest: 0,
    comission: 0
  });

  const dispatch = useDispatch();
  const { value, table, url, client, paytype, card, contract, assets } = useSelector<APP, APP>(state => {
    return state;
  });


  useEffect(() => {
    axios.get<Table[]>('/api/tables').then(res => {
      var tables = res.data;
      for (const current of tables) {
        if (current.id === table.id) {
          setCurrentTable(current);
          for (const installment of current.installments) {
            if (installment.id === table.installmentId) {
              setCurrentInstallment(installment);
            }
          }
        }
      }
    }).catch(err => console.log(err))
  }, []);

  const onFinished = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${url}api/solicitation`, {
      clientId: client,
      assets: assets,
      installmentInterest: currentInstallment.installmentInterest,
      comission: currentInstallment.comission,
      comissionValue: ((value * (currentInstallment.comission / 100))).toFixed(2),
      installmentInterestValue: ((value * (currentInstallment.installmentInterest / 100))).toFixed(2),
      cardDetails: card,
      desiredValue: value,
      contract: contract,
      paytype: paytype,
      status: 'Aguardando',
      totalLoan: (value + (value * (currentInstallment.comission / 100))).toFixed(2),
      installmentId: table.installmentId,
      tableId: table.id,
    }).then(res => {
      setLoading(false);
      dispatch(setCurrentSolicitation(res.data._id, 'SET_CURRENT_SOLICITATION'));
      dispatch(setStep(6, 'SET_STEP'));
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
    setLoading(false);
  }

  return (
    <Spin spinning={loading} size='large'>
      <DataReviewContainer>
        <header>
          <div>
            <img src={add} alt='Add' />
            <img src={box} alt='Simulation' />
            <h1>Solicitar Empréstimo</h1>
          </div>
          <div>
            <label>Tabela</label>
            <input type='text' value={currentTable.name} />
          </div>
        </header>
        <section>
          <div>
            <div>
              <label>Valor desejado</label>
              <input type='text' value={`R$ ${value.toFixed()}`} />
            </div>
            <div>
              <label>Parcelas</label>
              <input type='text' value={currentInstallment.installments} />
            </div>
          </div>
          <div>
            <div>
              <label>Valor Total do Empréstimo</label>
              <input type='text' value={`R$ ${(value + (value * (currentInstallment.comission / 100))).toFixed(2)}`} />
            </div>
            <div>
              <label>Valor da Parcela</label>
              <input type='text' value={`R$ ${((value / currentInstallment.installments) + (value / currentInstallment.installments * (currentInstallment.comission / 100))).toFixed(2)}`} />
            </div>
          </div>
        </section>
        <form onSubmit={onFinished}>
          <span>Escolha o tipo de contrato: </span>
          <div>
            <div>
              <button type='button' onClick={() => {
                setBtnAutoStyles({
                  color: '#FFF',
                  background: '#228A95'
                });
                setBtnManuStyles({
                  color: '#228A95',
                  background: '#FFF'
                })
                dispatch(setTypeContract('AUTO', 'SET_CONTRACT'));
              }} style={btnAutoStyles}>Automático</button>
              <button type='button' onClick={() => {
                dispatch(setTypeContract('MANU', 'SET_CONTRACT'));
                setBtnAutoStyles({
                  color: '#228A95',
                  background: '#FFF'
                });
                setBtnManuStyles({
                  color: '#FFF',
                  background: '#228A95'
                })
              }} style={btnManuStyles}>Manual</button>
            </div>
            <button>
              <img src={confirm} alt='Confirmar' />
            Confirmar
          </button>
          </div>
        </form>
        <article>
          <table>
            <th colSpan={5}>
              {currentTable.name}
            </th>
            <tbody>
              <th>Parcela</th>
              <th>Juros da Parcela</th>
              <th>Valor da Parcela</th>
              <th>Valor Total</th>
              <th>Comissão Parceiro</th>
            </tbody>
            {
              currentTable.installments.map(installment => (
                <tr key={installment.id}>
                  <td>{installment.installments}</td>
                  <td>{installment.installmentInterest} %</td>
                  <td>{getValueInstallment(value, installment)}</td>
                  <td>{getValueTotalMoreComission(value, installment)}</td>
                  <td>{getValueComission(value, installment)}</td>
                </tr>
              ))
            }
          </table>
        </article>
      </DataReviewContainer>
    </Spin>
  );
}

export default DataReview;