import { Context } from 'vm';

import { createStore, AnyAction } from 'redux';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';

export interface APP {
  step: Number;
  value: number;
  url: String;
  client: String;
  table: {
    id: String;
    installmentId: String;
  };
  card: CARD;
  contract: String,
  paytype: String;
  assets: Array<Object>;
  currentSolicitation: String;
}

export interface CARD{
  number: String,
  cvc: String,
  validate: String,
}

const INITIAL = {
  step: 1,
  value: 0,
  client: '',
  url: null,
  table: {
    id: '',
    installmentId: '',
  },
  paytype: 'card',
  contract: '',
  card: {
    number: '',
    cvc: '',
    validate: '',
  },
  currentSolicitation: '',
  assets: []
};

const reducer = (state: APP = INITIAL, action: AnyAction) => {

  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'SET_DETAILS':
      return { ...state, table: action.payload };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SET_CLIENT':
      return { ...state, client: action.payload };
    case 'SET_ASSETS':
      return { ...state, assets: action.payload };
    case 'SET_CARD':
      return { ...state, card: action.payload };
    case 'SET_PAYTYPE':
      return { ...state, paytype: action.payload };
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'SET_CONTRACT':      
      return { ...state, contract: action.payload };
    case 'SET_CURRENT_SOLICITATION':
      return { ...state, currentSolicitation: action.payload };
    default:
      return state;
  }
};
const makeStore: MakeStore<APP> = (context: Context) => createStore(reducer, INITIAL);

export const wrapper = createWrapper<APP>(makeStore, { debug: true });
