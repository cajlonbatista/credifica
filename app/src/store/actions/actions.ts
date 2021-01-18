export const setUrl = (payload: string, type: string) => {
  return {
    type: type,
    payload: payload,
  };
}