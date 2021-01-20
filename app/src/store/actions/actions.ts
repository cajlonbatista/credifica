import { CARD } from "../store";

interface DETAILS {
  id: String;
  installmentId: String;
}
interface ASSETS {
  title: String,
  file: String,
}

export const setUrl = (payload: string, type: string) => {
  return {
    type: type,
    payload: payload,
  };
}

export const setValue = (payload: number, type: string) => {
  return {
    type: type,
    payload: payload,
  };
}

export const setClient = (payload: string, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setDetails = (payload: DETAILS, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setStep = (payload: number, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setAssets = (payload: Array<ASSETS>, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setCard = (payload: CARD, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setPayType = (payload: string, type: string) => {
  return {
    type: type,
    payload: payload,
  }
}

export const setTypeContract = (payload: string, type: string) => {  
  return {
    type: type,
    payload: payload,
  }
}