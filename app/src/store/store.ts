import { createStore, AnyAction } from 'redux';

import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export interface INITIAL {
  step: Number;
  value: Number;
}

const reducer = (state: INITIAL = { step: 1, value: 0 }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const makeStore: MakeStore<INITIAL> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<INITIAL>(makeStore, { debug: true });