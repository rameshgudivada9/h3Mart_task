import { GET_DATA } from "./Action";

var init={
    getdata:[]
}

export const Reducerdata = (store=init, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...store, getdata:payload };
    default:
      return store;
  }
};