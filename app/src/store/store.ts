import { Context } from 'vm';

import { createStore, AnyAction } from 'redux';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';

export interface APP {
  step: Number;
  value: Number;
  url: String;
}

const INITIAL = {
  step: 1,
  value: 0,
  url: null
};

const reducer = (state: APP = INITIAL, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_URL':
      return { ...state, url: action.payload };
    default:
      return state;
  }
};
const makeStore: MakeStore<APP> = (context: Context) => createStore(reducer, INITIAL);

export const wrapper = createWrapper<APP>(makeStore, { debug: true });
